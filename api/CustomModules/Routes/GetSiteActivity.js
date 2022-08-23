const {getDBConnection, logSuspiciousActivity} = require('../HelperFunctions/HelperFunctions')
const {body, validationResult} = require('express-validator')

const validateSiteActivityRequest = [
    body('startDate').notEmpty().isString().matches('[0-9]{2}/[0-9]{2}/[0-9]{4}').trim(),
    body('endDate').notEmpty().isString().matches('[0-9]{2}/[0-9]{2}/[0-9]{4}').trim(),
]
const getSiteActivity = async (request, response) => {
    const errors = validationResult(request)
    try {
        if (!errors.isEmpty()) {
            await logSuspiciousActivity('site_activity_request_validation_failed')
            return response.sendStatus(422)
        }
        const connection = await getDBConnection()
        const activityData = await connection.query(`SELECT date, cover, about, problem, problem_data AS problemData,
        solution, solution_data AS solutionData, new_world AS newWorld, new_world_data AS newWorldData, what_to_do 
        AS whatToDo, sign_up AS signUp, contact, refs, pdf_download AS pdfDownload, admin_login AS adminLogins, 
        admin_dashboard AS adminDashboard FROM site_activity
        WHERE STR_TO_DATE(date, '%d/%m/%Y') >= STR_TO_DATE('` + request.body.startDate + `' , '%d/%m/%Y')
        AND STR_TO_DATE(date, '%d/%m/%Y') <= STR_TO_DATE('` + request.body.endDate + `', '%d/%m/%Y')`)
        connection.end()
        return response.json(activityData).status(200)
    } catch (exception){
        return response.sendStatus(500)
    }
}

module.exports = {
    validateSiteActivityRequest: validateSiteActivityRequest,
    getSiteActivity: getSiteActivity
}