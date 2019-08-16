module.exports = function() {
    var express = require('express');
    var router  = express.Router();
    var mysql = require('./dbcon.js');

    router.get('/', function(req, res) {
        var context = {};
        context.jsscripts = ["deleteman.js"];
        mysql.pool.query('SELECT * FROM ph_man', function(err, rows, fields) {
            context.man = rows;
            res.render('man', context);
        });
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
                res.redirect('/manufacturer');
            }
        });
    });

    router.delete('/:id', function(req, res) {
        var sql = "DELETE FROM ph_man WHERE id = ?";
        var inserts = [req.params.id];
        sql = mysql.pool.query(sql, inserts, function(error, results, fields) {
            if (error) {
                console.log(error)
                res.write(JSON.stringify(error));
                res.status(400);
                res.end();
            } else {
                res.status(202).end();
            }
        })
    });

    return router;

}();
