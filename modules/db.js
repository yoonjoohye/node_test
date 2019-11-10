const mysql = require('mysql2/promise')
const properties = require('./properties.json')


const sqlConfig = {
    host: properties.dbconfig.db_host,
    port: properties.dbconfig.db_port,
    user: properties.dbconfig.db_user,
    password: properties.dbconfig.db_password,
    database: properties.dbconfig.db_name,
    connectionLimit : 4
}

let pool = mysql.createPool(sqlConfig);






// function handleDisconnect(client) {
//
//     client.on('error', (err)=>{
//
//         if (!err.fatal) return;
//
//         if (err.code !== 'PROTOCOL_CONNECTION_LOST') throw err;
//
//         console.log('> Re-connecting lost MySQL connection');
//
//         setTimeout(()=>{
//             sql.destroy()
//             sql = mysql.createConnection(sqlConfig)
//             handleDisconnect(sql)
//             db = sql.connect()
//             exports.db = db
//             exports.sql = sql
//         }, 1000);
//     })
// };

// handleDisconnect(sql)

exports.pool = pool