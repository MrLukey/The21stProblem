const {body, validationResult} = require('express-validator')
const {capitaliseFirstLetter, getDBConnection, insertActivityRowForTodayIfDoesNotExist} = require('../HelperFunctions/HelperFunctions')

const validateSignUp = [
    body('firstName').notEmpty().isLength({min:1, max:35}).isString().trim().escape(),
    body('lastName').notEmpty().isLength({min:1, max:35}).isString().trim().escape(),
    body('email').notEmpty().isLength({min:5, max:255}).isEmail().trim().escape(),
    body('placeOfResidence').notEmpty().isLength({min:1, max:80}).trim().escape(),
    body('profession').notEmpty().isLength({min:1, max:35}).isString().trim().escape(),
    body('reasonForJoining').notEmpty().isLength({min:1, max:500}).isString().trim().escape()
]
const signUp = [...validateSignUp, async (request, response) => {
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
}]

module.exports = {signUp: [signUp]}