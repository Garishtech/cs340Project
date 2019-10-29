var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_manncr',
  password        : '9793',
  database        : 'cs340_manncr'
});

module.exports.pool = pool;
