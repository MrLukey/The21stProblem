const mysql = require('promise-mysql')

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getDBConnection() {
    return mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'the_21st_problem'
    })
}

async function insertActivityRowForTodayIfDoesNotExist(connection, table_name, todaysDate) {
    try {
        const activityRow = await connection.query(`SELECT id FROM ` + table_name + ` WHERE date = '` + todaysDate + `';`)
        if (activityRow.length === 0){
            await connection.query(`INSERT INTO ` + table_name + ` (date) VALUES ('` + todaysDate + `')`)
        }
        return true;
    } catch (exception){
        return false;
    }
}

module.exports = {
    capitaliseFirstLetter: capitaliseFirstLetter,
    getDBConnection: getDBConnection,
    insertActivityRowForTodayIfDoesNotExist: insertActivityRowForTodayIfDoesNotExist
}