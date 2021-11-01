const {body, validationResult} = require('express-validator')
const {getDBConnection, logSuspiciousActivity} = require('../HelperFunctions/HelperFunctions')

const validateEdit = [
    body('messageID').notEmpty().isNumeric().isLength({min:1, max:11}).trim().escape(),
    body('stateToChange').notEmpty().isString().isLength({min:1, max:25}).trim().escape(),
    body('newState').notEmpty().isNumeric().isLength({min: 1, max: 1}).matches('[0|1]').trim().escape(),
]

const editMessageState = async (request, response) => {
    const errors = validationResult(request)
    try {
        if (!errors.isEmpty()) {
            await logSuspiciousActivity('edit_message_validation_failed')
            return response.sendStatus(422)
        }
        const connection = await getDBConnection()
        await connection.query(`UPDATE messages SET ` + request.body.stateToChange + ` = ` + request.body.newState
            + ` WHERE id = ` + request.body.messageID + `;`)
        connection.end()
        return response.sendStatus(200)
    } catch (exception){
        return response.sendStatus(500)
    }
}

module.exports = {
    validateEdit: validateEdit,
    editMessageState: editMessageState
}