const {getDBConnection, logSuspiciousActivity} = require('../HelperFunctions/HelperFunctions')
const {body, validationResult} = require('express-validator')

const validateSignUpRequest = [
    body('startDate').notEmpty().isString().matches('[0-9]{2}/[0-9]{2}/[0-9]{4}').trim(),
    body('endDate').notEmpty().isString().matches('[0-9]{2}/[0-9]{2}/[0-9]{4}').trim(),
]
const getSignUps = async (request, response) => {
    const errors = validationResult(request)
    try {
        if (!errors.isEmpty()) {
            await logSuspiciousActivity('sign_up_request_validation_failed')
            return response.sendStatus(422)
        }
        const connection = await getDBConnection()
        const signUpData = await connection.query(`SELECT id, first_name AS firstName, last_name AS lastName, 
        email, residence, profession, reason_for_joining AS reasonForJoining, date_joined AS dateJoined, seen_by_admin 
        AS seenByAdmin, action_email_sent AS actionEmailSent FROM sign_ups
        WHERE STR_TO_DATE(date_joined, '%d/%m/%Y') >= STR_TO_DATE('` + request.body.startDate + `', '%d/%m/%Y')
        AND STR_TO_DATE(date_joined, '%d/%m/%Y') <= STR_TO_DATE('` + request.body.endDate + `', '%d/%m/%Y')`)
        connection.end()
        return response.json(signUpData).status(200)
    } catch (exception){
        return response.sendStatus(500)
    }
}

module.exports = {
    validateSignUpRequest: validateSignUpRequest,
    getSignUps: getSignUps
}