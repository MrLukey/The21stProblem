const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const {logPageLoad} = require('./CustomModules/Routes/LogPageLoad')
const {signUp} = require('./CustomModules/Routes/SignUp')
const {contact} = require('./CustomModules/Routes/Contact')
const {allCountries} = require('./CustomModules/Routes/AllCountries')
const {validateAdminLogin, adminLogin} = require('./CustomModules/Routes/AdminLogin')
const {allSignUps} = require('./CustomModules/Routes/AllSignUps')
const {allMessages} = require('./CustomModules/Routes/AllMessages')
const {siteActivity} = require('./CustomModules/Routes/SiteActivity')
const {suspiciousActivity} = require('./CustomModules/Routes/SuspiciousActivity')
const {validateEdit, editMessageState} = require('./CustomModules/Routes/EditMessageState')

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

app.post('/admin-login', destroySession, ...validateAdminLogin, adminLogin, setAdminLoggedIn)
app.get('/verify-admin', verifyAdmin, async (request, response) => {return response.sendStatus(200)})
app.get('/sign-ups', verifyAdmin, allSignUps)
app.get('/messages', verifyAdmin, allMessages)
app.get('/site-activity', verifyAdmin, siteActivity)
app.get('/suspicious-activity', verifyAdmin, suspiciousActivity)
app.post('/edit-message-state', verifyAdmin, ...validateEdit, editMessageState)

app.listen(port)