const {getDBConnection, logSuspiciousActivity} = require('../HelperFunctions/HelperFunctions')
const {body, validationResult} = require('express-validator')

const validateSuspiciousActivityRequest = [
    body('startDate').notEmpty().isString().matches('[0-9]{2}/[0-9]{2}/[0-9]{4}').trim(),
    body('endDate').notEmpty().isString().matches('[0-9]{2}/[0-9]{2}/[0-9]{4}').trim(),
]

const getSuspiciousActivity = async (request, response) => {
    const errors = validationResult(request)
    try {
        if (!errors.isEmpty()) {
            await logSuspiciousActivity('suspicious_activity_request_validation_failed')
            return response.sendStatus(422)
        }
        const connection = await getDBConnection()
        const activityData = await connection.query(`SELECT 
        id, date, 
        page_logging_failure AS pageLoggingFailure,
        contact_validation_failed AS contactValidationFailed, 
        sign_up_validation_failed AS signUpValidationFailed, 
        admin_login_validation_failed AS adminLoginValidationFailed, 
        message_request_validation_failed AS messageRequestValidationFailed, 
        sign_up_request_validation_failed AS signUpRequestValidationFailed,
        site_activity_request_validation_failed AS siteActivityRequestValidationFailed, 
        suspicious_activity_request_validation_failed AS suspiciousActivityRequestValidationFailed,
        edit_message_validation_failed AS editMessageValidationFailed,
        edit_sign_up_validation_failed AS editSignUpValidationFailed,
        failed_admin_login AS failedAdminLogin
        FROM suspicious_activity`)
        connection.end()
        return response.json(activityData).status(200)
    } catch (exception){
        return response.sendStatus(500)
    }
}

module.exports = {
    validateSuspiciousActivityRequest: validateSuspiciousActivityRequest,
    getSuspiciousActivity: getSuspiciousActivity
}