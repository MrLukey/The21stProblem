const {getDBConnection} = require('../HelperFunctions/HelperFunctions')

const suspiciousActivity = async (request, response) => {
    try {
        const connection = await getDBConnection()
        const activityData = await connection.query(`SELECT date, page_logging_failure AS pageLoggingFailure,
        contact_validation_failed AS contactValidationFailed, sign_up_validation_failed AS signUpValidationFailed, 
        admin_login_validation_failed AS adminLoginValidationFailed, failed_admin_login AS failedAdminLogin 
        FROM suspicious_activity`)
        connection.end()
        return response.json(activityData)
    } catch (exception){
        return response.sendStatus(500)
    }
}

module.exports = {suspiciousActivity: suspiciousActivity}