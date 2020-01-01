var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'YOUR PASSWORD',
    database : 'YOUR DATABASE'
  });
db.connect();

module.exports = db;
