const {body, validationResult} = require('express-validator')
const {capitaliseFirstLetter, getDBConnection, logSuspiciousActivity} = require('../HelperFunctions/HelperFunctions')

const validateContact = [
    body('firstName').notEmpty().isLength({min:1, max:35}).isString().trim().escape(),
    body('lastName').notEmpty().isLength({min:1, max:35}).isString().trim().escape(),
    body('email').optional({checkFalsy: true}).notEmpty().isLength({min:5, max:255}).isEmail().trim().escape(),
    body('message').notEmpty().isLength({min:1, max:500}).isString().trim().escape()
]

const contact = [...validateContact, async (request, response) => {
    const todaysDate = new Date().toLocaleDateString('en-GB')
    const timeNow = new Date().toLocaleTimeString('en-GB')
    const errors = validationResult(request)
    try {
        if (!errors.isEmpty()) {
            await logSuspiciousActivity('contact_validation_failed')
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
}]

module.exports = {contact: [contact]}