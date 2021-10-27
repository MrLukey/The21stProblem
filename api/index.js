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
    resave: false
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



const validateSignUp = [
    body('first_name').notEmpty().isLength({min:1, max:30}).isString().trim().escape(),
    body('second_name').notEmpty().isLength({min:1, max:30}).isString().trim().escape(),
    body('email', 'Please enter an e-mail address').notEmpty().isLength({min:3, max:120}).isEmail().trim().escape(),
    body('profession').notEmpty().isLength({min:1, max:120}).isString().trim().escape(),
    body('reason_for_joining').isLength({min:0, max:500}).isString().trim().escape()
]

app.post('/sign-up', ...validateSignUp, async (request, response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        response.sendStatus(422).json({errors: errors.array()})
    }
    const todaysDate = new Date().toLocaleDateString('en-GB')
    try {
        const connection = await getDBConnection()
        await connection.query(`INSERT INTO sign_ups (first_name, second_name, email, profession, reason_for_joining, date_joined) VALUES ('`
            + request.body.first_name + `', '` + request.body.second_name + `', '` + request.body.email + `', '` + request.body.profession + `', '`
            + request.body.reason_for_joining + `', '` + todaysDate + `');`)
        response.sendStatus(200)
    } catch (exception){
        console.log(exception.sqlState)
        response.sendStatus(500)
    }
})

const validatePageToLog = body('page', 'Hacking Logged').isString().matches('^([a-z]+_?[a-z]*_?[a-z]*)').trim().escape()
app.post('/log-page-load', validatePageToLog, async (request, response) => {
    const todaysDate = new Date().toLocaleDateString('en-GB')
    const errors = validationResult(request)
    try {
        if (!errors.isEmpty()) {
            const connection = await getDBConnection()
            await insertActivityRowForTodayIfDoesNotExist(connection, 'suspicious_activity', todaysDate)
            await connection.query(`UPDATE suspicious_activity SET page_logging_failure = page_logging_failure + 1 WHERE date = '` + todaysDate + `';`)
            connection.end()
            response.sendStatus(422).json({errors: errors.array()})
        }
        const pageToLog = request.body.page
        const connection = await getDBConnection()
        await insertActivityRowForTodayIfDoesNotExist(connection, 'site_activity', todaysDate)
        await connection.query(`UPDATE site_activity SET ` + pageToLog + ` = ` + pageToLog + ` + 1 WHERE date = '` + todaysDate + `';`)
        connection.end()
        response.sendStatus(200)
    } catch (exception) {
        response.sendStatus(500)
    }
})

app.listen(port)