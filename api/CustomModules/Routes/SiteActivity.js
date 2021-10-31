const {getDBConnection} = require('../HelperFunctions/HelperFunctions')

const siteActivity = async (request, response) => {
    try {
        const connection = await getDBConnection()
        const activityData = await connection.query(`SELECT date, cover, problem, problem_data AS problemData,
        solution, solution_data AS solutionData, new_world AS newWorld, what_to_do AS whatToDo, sign_up AS signUp, 
        contact, refs, pdf_download AS pdfDownload, admin_login AS adminLogin, admin_dashboard AS adminDashboard 
        FROM site_activity`)
        connection.end()
        return response.json(activityData)
    } catch (exception){
        return response.sendStatus(500)
    }
}

module.exports = {siteActivity: siteActivity}