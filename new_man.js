module.exports = function() {
    var express = require('express');
    var router  = express.Router();
    var mysql = require('./dbcon.js');

    router.get('/', function(req, res) {
        var context = {}
        res.render('new_man', context);
    });

    router.post('/', function(req, res) {
        //var mysql = req.app.get('mysql');
        var sql = "INSERT INTO ph_man (name) VALUES (?)";
        var inserts = [req.body.name];
        sql = mysql.pool.query(sql, inserts, function(error, results, fields) {
            if(error) {
                res.write(JSON.stringify(error));
                res.end();
            } else {
                res.redirect('/phone');
            }
        });
    });

    return router;

}();
