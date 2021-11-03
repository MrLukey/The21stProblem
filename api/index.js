const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const {logPageLoad} = require('./CustomModules/Routes/LogPageLoad')
const {signUp} = require('./CustomModules/Routes/SignUp')
const {contact} = require('./CustomModules/Routes/Contact')
const {allCountries} = require('./CustomModules/Routes/AllCountries')
const {validateAdminLogin, logAdminIn} = require('./CustomModules/Routes/AdminLogin')
const {validateSignUpRequest, getSignUps} = require('./CustomModules/Routes/GetSignUps')
const {validateMessageRequest, getMessages} = require('./CustomModules/Routes/GetMessages')
const {validateSiteActivityRequest, getSiteActivity} = require('./CustomModules/Routes/GetSiteActivity')
const {validateSuspiciousActivityRequest, getSuspiciousActivity} = require('./CustomModules/Routes/GetSuspiciousActivity')
const {validateMessageEdit, editMessageState} = require('./CustomModules/Routes/EditMessageState')
const {validateSignUpEdit, editSignUpState} = require('./CustomModules/Routes/EditSignUpState')

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

let userSession
const destroySession = (request, response, next) => {
    userSession = request.session
    userSession.destroy()
    next()
}

const setAdminLoggedIn = (request, response) => {
    userSession.adminLoggedIn = true
    return response.sendStatus(200)
}

const verifyAdmin = (request, response, next) => {
    if (userSession && userSession.adminLoggedIn){
        next()
    } else {
        return response.sendStatus(403)
    }
}

app.post('/log-page-load', ...logPageLoad)
app.post('/sign-up', ...signUp)
app.post('/contact', ...contact)
app.get('/get-all-countries', allCountries)

app.post('/admin-login', destroySession, ...validateAdminLogin, logAdminIn, setAdminLoggedIn)
app.get('/verify-admin', verifyAdmin, async (request, response) => {return response.sendStatus(200)})
app.post('/sign-ups', ...validateSignUpRequest, getSignUps)
app.post('/messages', ...validateMessageRequest, getMessages)
app.post('/site-activity', ...validateSiteActivityRequest, getSiteActivity)
app.post('/suspicious-activity', ...validateSuspiciousActivityRequest, getSuspiciousActivity)
app.post('/edit-message-state', ...validateMessageEdit, editMessageState)
app.post('/edit-sign-up-state', ...validateSignUpEdit, editSignUpState)

app.listen(port)