const mysql = require('mysql');

const db = mysql.createPool({
    host: 'db01.cpyk7jklq4vq.ap-northeast-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'na864521',
    database: 'db01'
});

module.exports = db;