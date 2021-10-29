const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const {logPageLoad} = require('./CustomModules/Routes/LogPageLoad')
const {signUp} = require('./CustomModules/Routes/SignUp')
const {adminLogin} = require('./CustomModules/Routes/AdminLogin')
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
    adminLoggedIn: false,
    adminObject: null
}));

app.post('/log-page-load', ...logPageLoad)
app.post('/admin-login', ...adminLogin)
app.post('/sign-up', ...signUp)
app.post('/contact', ...contact)
app.get('/get-all-countries', allCountries)

app.listen(port)