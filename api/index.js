const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const {body, validationResult} = require('express-validator')
const mysql = require('promise-mysql')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const port = 3001
const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.set('trust proxy', 1)

let userSession
app.use(session({
    secret: "hJkrhgODMXjvTpsSNYhjQtBwAB",
    saveUninitialized: true,
    resave: false,
    adminLoggedIn: false,
    adminObject: null
}));

async function getDBConnection() {
    return mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'the_21st_problem'
    })
}

async function insertActivityRowForTodayIfDoesNotExist(connection, table_name, todaysDate) {
    try {
        const activityRow = await connection.query(`SELECT id FROM ` + table_name + ` WHERE date = '` + todaysDate + `';`)
        if (activityRow.length === 0){
            await connection.query(`INSERT INTO ` + table_name + ` (date) VALUES ('` + todaysDate + `')`)
        }
        return true;
    } catch (exception){
        return false;
    }
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const validateSignUp = [
    body('firstName').notEmpty().isLength({min:1, max:35}).isString().trim().escape(),
    body('lastName').notEmpty().isLength({min:1, max:35}).isString().trim().escape(),
    body('email').notEmpty().isLength({min:5, max:255}).isEmail().trim().escape(),
    body('placeOfResidence').notEmpty().isLength({min:1, max:80}).trim().escape(),
    body('profession').notEmpty().isLength({min:1, max:35}).isString().trim().escape(),
    body('reasonForJoining').notEmpty().isLength({min:1, max:500}).isString().trim().escape()
]

app.post('/sign-up', ...validateSignUp, async (request, response) => {
    const todaysDate = new Date().toLocaleDateString('en-GB')
    const errors = validationResult(request)
    try {
        if (!errors.isEmpty()) {
            const connection = await getDBConnection()
            await insertActivityRowForTodayIfDoesNotExist(connection, 'suspicious_activity', todaysDate)
            await connection.query(`UPDATE suspicious_activity SET sign_up_validation_failed = sign_up_validation_failed + 1 WHERE date = '` + todaysDate + `';`)
            connection.end()
            return response.sendStatus(422)
        }
        const connection = await getDBConnection()
        await connection.query(`INSERT INTO sign_ups (first_name, last_name, email, residence, profession, reason_for_joining, date_joined) VALUES ('`
            + capitaliseFirstLetter(request.body.firstName) + `', '` + capitaliseFirstLetter(request.body.lastName)
            + `', '` + request.body.email + `', '` + request.body.placeOfResidence + `', '` + capitaliseFirstLetter(request.body.profession)
            + `', '` + capitaliseFirstLetter(request.body.reasonForJoining) + `', '` + todaysDate + `');`)
        connection.end()
        response.sendStatus(200)
    } catch (exception){
        if (exception.sqlState === '23000'){
            return response.sendStatus(403)
        } else {
            return response.sendStatus(500)
        }

    }
})

const validateContact = [
    body('firstName').notEmpty().isLength({min:1, max:35}).isString().trim().escape(),
    body('lastName').notEmpty().isLength({min:1, max:35}).isString().trim().escape(),
    body('email').optional({checkFalsy: true}).notEmpty().isLength({min:5, max:255}).isEmail().trim().escape(),
    body('message').notEmpty().isLength({min:1, max:500}).isString().trim().escape()
]
app.post('/contact', ...validateContact, async (request, response) => {
    const todaysDate = new Date().toLocaleDateString('en-GB')
    const timeNow = new Date().toLocaleTimeString('en-GB')
    const errors = validationResult(request)
    try {
        if (!errors.isEmpty()) {
            const connection = await getDBConnection()
            await insertActivityRowForTodayIfDoesNotExist(connection, 'suspicious_activity', todaysDate)
            await connection.query(`UPDATE suspicious_activity SET contact_validation_failed = contact_validation_failed + 1 WHERE date = '` + todaysDate + `';`)
            connection.end()
            return response.sendStatus(422)
        }
        const connection = await getDBConnection()
        await connection.query(`INSERT INTO messages (first_name, last_name, email, message, date, time) VALUES ('`
            + capitaliseFirstLetter(request.body.firstName) + `', '` + capitaliseFirstLetter(request.body.lastName)
            + `', '` + request.body.email + `', '` + capitaliseFirstLetter(request.body.message) + `', '` + todaysDate +
            `', '` + timeNow + `');`)
        connection.end()
        response.sendStatus(200)
    } catch (exception){
        return response.sendStatus(500)
    }
})

const validPages = 'cover|problem|problem_data|solution|solution_data|new_world|new_world_data|what_to_do|sign_up|contact|refs|pdf_downloads'
const validatePageToLog = body('page', 'Hacking Logged').isString().matches(validPages).trim().escape()
app.post('/log-page-load', validatePageToLog, async (request, response) => {
    const todaysDate = new Date().toLocaleDateString('en-GB')
    const errors = validationResult(request)
    try {
        if (!errors.isEmpty()) {
            const connection = await getDBConnection()
            await insertActivityRowForTodayIfDoesNotExist(connection, 'suspicious_activity', todaysDate)
            await connection.query(`UPDATE suspicious_activity SET page_logging_failure = page_logging_failure + 1 WHERE date = '` + todaysDate + `';`)
            connection.end()
            return response.sendStatus(422)
        }
        const pageToLog = request.body.page
        const connection = await getDBConnection()
        await insertActivityRowForTodayIfDoesNotExist(connection, 'site_activity', todaysDate)
        await connection.query(`UPDATE site_activity SET ` + pageToLog + ` = ` + pageToLog + ` + 1 WHERE date = '` + todaysDate + `';`)
        connection.end()
        return response.sendStatus(200)
    } catch (exception) {
        return response.sendStatus(500)
    }
})

app.get('/get-all-countries', async (request, response) => {
    try {
        const connection = await getDBConnection()
        const allCountries = await connection.query('SELECT id, name FROM countries')
        connection.end()
        return response.json(allCountries)
    } catch (exception){
        return response.sendStatus(500)
    }
})

const validateAdminLogin = [
    body('email', 'Please enter an e-mail address').isEmail().trim().escape(),
    body('password').isLength({min: 8}).matches('[0-9]').matches('(?=.*[a-z])(?=.*[A-Z])').trim().escape()
]
app.post('/admin-login', ...validateAdminLogin, async (request, response) => {
    userSession = request.session
    const connection = await getDBConnection()
    try {
        const adminData = await connection.query(`SELECT id, first_name AS firstName, last_name AS lastName, email, 
            password FROM admins WHERE email = '` + request.body.email +`';` )
        if (adminData.length !== 0) {
            const validPass = await bcrypt.compare(request.body.password, adminData[0].password)
            if (validPass) {
                userSession.adminLoggedIn = true
                userSession.adminObject = {id: adminData[0].id, firstName: adminData[0].firstName}
                return response.sendStatus(200)
            }
        }
        return response.sendStatus(403)
    } catch(exception) {
        return response.sendStatus(500)
    }
})

app.listen(port)