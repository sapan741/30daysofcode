const { createPool } = require("mysql");

const pool = createPool({
  host:"localhost",//host: process.env.MYSQL_HOST,
  port:3306,//port: process.env.MYSQL_PORT,
  user:"root",//user: process.env.MYSQL_USER,
  password:"",//password: process.env.MYSQL_PASSWORD,
  database:"test",//database: process.env.MYSQL_DATABASE,
  connectionLimit: 10
});

module.exports = pool;
