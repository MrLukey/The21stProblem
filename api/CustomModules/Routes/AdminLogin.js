const {getDBConnection} = require('../HelperFunctions/HelperFunctions')
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')

const validateAdminLogin = [
    body('email', 'Please enter an e-mail address').isEmail().trim().escape(),
    body('password').isLength({min: 8}).matches('[0-9]').matches('(?=.*[a-z])(?=.*[A-Z])').trim().escape()
]
const adminLogin = [...validateAdminLogin, async (request, response, userSession) => {
    userSession = request.session
    const connection = await getDBConnection()
    try {
        const adminData = await connection.query(`SELECT id, first_name AS firstName, last_name AS lastName, email, 
            password FROM admins WHERE email = '` + request.body.email +`';` )
        if (adminData.length !== 0) {
            const validPass = await bcrypt.compare(request.body.password, adminData[0].password)
            if (validPass) {
                userSession.adminLoggedIn = true
                userSession.adminObject = {id: adminData[0].id, firstName: adminData[0].firstName}
                return response.sendStatus(200)
            }
        }
        return response.sendStatus(403)
    } catch(exception) {
        console.log(exception)
        return response.sendStatus(500)
    }
}]

module.exports = {adminLogin: [adminLogin]}