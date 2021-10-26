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

const validateSignUp = [
    body('name').isString().trim().escape(),
    body('email', 'Please enter an e-mail address').isEmail().trim().escape()
]

app.post('/sign-up', ...validateSignUp, async (request, response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        return response.status(422).json({errors: errors.array()})
    }
})

app.post('/log-page-load', async (request, response) => {
    const pageToLog = request.body.page
    const connection = await getDBConnection()
    const sqlQuery =
        `UPDATE page_loads
        SET ` + pageToLog + ` = ` + pageToLog + ` + 1
        WHERE id = 1;`
    try {
        connection.query(sqlQuery)
        response.sendStatus(200)
    } catch (exception){
        console.log(exception)
        response.sendStatus(500)
    }
})

app.listen(port)