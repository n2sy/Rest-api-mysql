const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config();

var mysqlConnection = mysql.createConnection({
    host: process.env.HOST, 
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE,
    port : 8889
})

mysqlConnection.connect((err) => {
    if(!err) {
        console.log("Connected");
    }
    else {
        console.log("Problem to connect !");
    }
})

module.exports = mysqlConnection;