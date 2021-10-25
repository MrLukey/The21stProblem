const express = require('express')
const session = require('express-session')
const {body, validationResult} = require('express-validator')
const mysql = require('promise-mysql')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const port = 3001
const app = express()
app.use(cors())
app.use(express.json())
app.set('trust proxy', 1)

let userSession
app.use(session({
    secret: "hJkrhgODMXjvTpsSNYhjQtBwAB",
    saveUninitialized: true,
    resave: false,
    isLoggedIn: false,
    userObject: {id: 0, name: ''}
}));

async function getDBConnection() {
    return mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'the-21st-problem'
    })
}

app.get('/test', async (request, response) => {
    response.sendStatus(200)
})

app.listen(port)