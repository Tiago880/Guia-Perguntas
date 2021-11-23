
const mysql = require('mysql');

const connMYSQL = function(){

    return mysql.createConnection({
        host: 'localhost',
        user : 'root',
        password : '0463',
        database: 'portal_noticias'
        });
}

module.exports = function(){

    return connMYSQL;

}