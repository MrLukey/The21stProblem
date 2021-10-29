const {body, validationResult} = require('express-validator')
const {getDBConnection, insertActivityRowForTodayIfDoesNotExist, logSuspiciousActivity} = require('../HelperFunctions/HelperFunctions')

const validPages = 'cover|problem|problem_data|solution|solution_data|new_world|new_world_data|what_to_do|sign_up|contact|refs|pdf_downloads|admin_login|admin_dashboard'
const validatePageToLog = body('page', 'Hacking Logged').isString().matches(validPages).trim().escape()
const logPageLoad = [validatePageToLog, async (request, response ) => {
    const todaysDate = new Date().toLocaleDateString('en-GB')
    const errors = validationResult(request)
    try {
        if (!errors.isEmpty()) {
            await logSuspiciousActivity('page_logging_failure')
            return response.sendStatus(422)
        }
        const pageToLog = request.body.page
        const connection = await getDBConnection()
        await insertActivityRowForTodayIfDoesNotExist(connection, 'site_activity', todaysDate)
        await connection.query(`UPDATE site_activity SET ` + pageToLog + ` = ` + pageToLog + ` + 1 WHERE date = '` + todaysDate + `';`)
        connection.end()
        return response.sendStatus(200)
    } catch (exception) {
        return response.sendStatus(500)
    }
}]

module.exports = {
    logPageLoad: [logPageLoad]
}