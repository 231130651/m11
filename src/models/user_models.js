const mysql = require("../database/db")

async function users() {
    const [result] = await connection.execute("select * from tbl_pegawai")
    return result
}

async function userDetailByID(id) {
    try {
        const [result] = await connection.execute(
            "select * from tbl_pegawai where id=?",
            [id]
        )
        return result 
    } catch (error) {
        throw error;
    }
}

module.exports = {
    users,
    userDetailByID
}