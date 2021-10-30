const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const {getDBConnection, logSuspiciousActivity} = require('./CustomModules/HelperFunctions/HelperFunctions')
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')

const {logPageLoad} = require('./CustomModules/Routes/LogPageLoad')
const {signUp} = require('./CustomModules/Routes/SignUp')
const {contact} = require('./CustomModules/Routes/Contact')
const {allCountries} = require('./CustomModules/Routes/AllCountries')

const port = 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.set('trust proxy', 1)

app.use(session({
    secret: "hJkrhgODMXjvTpsSNYhjQtBwAB",
    saveUninitialized: true,
    resave: false,
}));

app.post('/log-page-load', ...logPageLoad)
app.post('/sign-up', ...signUp)
app.post('/contact', ...contact)
app.get('/get-all-countries', allCountries)

let userSession
const validateAdminLogin = [
    body('email', 'Please enter an e-mail address').isEmail().trim().escape(),
    body('password').isLength({min: 8}).matches('[0-9]').matches('(?=.*[a-z])(?=.*[A-Z])').trim().escape()
]
app.post('/admin-login', ...validateAdminLogin, async (request, response) => {
    const errors = validationResult(request)
    userSession = request.session
    userSession.destroy()
    try {
        if (!errors.isEmpty()) {
            await logSuspiciousActivity('admin_login_validation_failed')
            return response.sendStatus(422)
        }
        const connection = await getDBConnection()
        const adminData = await connection.query(`SELECT id, first_name AS firstName, last_name AS lastName, email, 
            password FROM admins WHERE email = '` + request.body.email +`';` )
        connection.end()
        if (adminData.length !== 0) {
            const validPass = await bcrypt.compare(request.body.password, adminData[0].password)
            if (validPass) {
                userSession.adminLoggedIn = true
                userSession.adminObject = {id: adminData[0].id, firstName: adminData[0].firstName}
                return response.sendStatus(200)
            }
        }
        await logSuspiciousActivity('failed_admin_login')
        return response.sendStatus(403)
    } catch(exception) {
        return response.sendStatus(500)
    }
})

app.get('/verify-admin', async (request, response) => {
    if (userSession && userSession.adminLoggedIn){
        return response.sendStatus(200)
    } else {
        return response.sendStatus(403)
    }
})

app.get('/sign-ups', async (request, response) => {
    if (userSession && userSession.adminLoggedIn){
        try {
            const connection = await getDBConnection()
            const signUpData = await connection.query(`SELECT first_name AS firstName, last_name AS lastName, residence,
            profession, reason_for_joining AS reasonForJoining, date_joined AS dateJoined FROM sign_ups ORDER BY dateJoined`)
            connection.end()
            return response.json(signUpData)
        } catch (exception){
            return response.sendStatus(500)
        }
    } else {
        return response.sendStatus(403)
    }
})

app.listen(port)