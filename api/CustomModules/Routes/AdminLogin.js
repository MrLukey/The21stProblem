const {body, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const {getDBConnection, logSuspiciousActivity} = require('../HelperFunctions/HelperFunctions')

const validateAdminLogin = [
    body('email', 'Please enter an e-mail address').isEmail().trim().escape(),
    body('password').isLength({min: 8}).matches('[0-9]').matches('(?=.*[a-z])(?=.*[A-Z])').trim().escape()
]
const adminLogin = async (request, response, next) => {
    const errors = validationResult(request)
    try {
        if (!errors.isEmpty()) {
            await logSuspiciousActivity('admin_login_validation_failed')
            return response.sendStatus(422)
        }
        const connection = await getDBConnection()
        const adminData = await connection.query(`SELECT id, first_name AS firstName, last_name AS lastName, email, 
            password FROM admins WHERE email = '` + request.body.email +`';` )
        connection.end()
        if (adminData.length !== 0) {
            const validPass = await bcrypt.compare(request.body.password, adminData[0].password)
            if (validPass) {
                next()
            } else {
                await logSuspiciousActivity('failed_admin_login')
                return response.sendStatus(403)
            }
        } else {
            await logSuspiciousActivity('failed_admin_login')
            return response.sendStatus(403)
        }
    } catch(exception) {
        console.log(exception)
        return response.sendStatus(500)
    }
}

module.exports = {
    validateAdminLogin: validateAdminLogin,
    adminLogin: adminLogin
}