module.exports = function() {
    var express = require('express');
    var router  = express.Router();
    var mysql = require('./dbcon.js');

    router.get('/', function(req, res) {
        var context = {};
        context.jsscripts = ["deletephone.js"];
        mysql.pool.query('SELECT * FROM ph_man', function(erro, rows, fields) {
            context.man = rows;
        });
        mysql.pool.query('SELECT p.id, p.model, screen_size, in_storage, ex_storage, name FROM ph_phone p left join ph_man m on m.id = p.manufacturer', function(err, rows, fields) {
            context.results = rows;
            res.render('phone', context);
        });
    });


    router.get('/:id', function(req, res) {
        callbackCount = 0;
        var context = {};
        context.jsscripts = ["selectedphone.js", "updatephone.js"];
        //var inserts = [id];
        mysql.pool.query('SELECT * FROM ph_man', function(erro, rows, fields) {
            context.man = rows;
        });
        mysql.pool.query('SELECT * FROM ph_phone WHERE id = ?', req.params.id, function(err, rows, fields) {
            context.results = rows[0];
            res.render('update-phone', context);
        });
        //var mysql = req.app.get('mysql');
        //getAphone(res, mysql, context, req.params.id, complete);
        function complete() {
            callbackCount++;
            if(callbackCount >= 1){
                res.render('phone', context);
            }
        }
    });

    router.get('/new_manufacturer', function(req, res) {
        res.redirect('/phone');
    });



    router.delete('/:id', function(req, res) {
        var sql = "DELETE FROM ph_phone WHERE id = ?";
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

    router.post('/', function(req, res) {
        //var mysql = req.app.get('mysql');
        var sql = "INSERT INTO ph_phone(model, screen_size, in_storage, ex_storage, manufacturer) VALUES (?, ?, ?, ?, ?)";
        var inserts = [req.body.model, req.body.screen_size, req.body.in_storage, req.body.ex_storage, req.body.manufacturer];
        sql = mysql.pool.query(sql, inserts, function(error, results, fields) {
            if(error) {
                res.write(JSON.stringify(error));
                res.end();
            } else {
                res.redirect('/phone');
            }
        });
    });


    router.put('/:id', function(req, res) {
        console.log(req.body)
        console.log(req.params.id)
        var sql = "UPDATE ph_phone SET model=?, screen_size=?, in_storage=?, ex_storage=?, manufacturer=? WHERE id=?";
        var inserts = [req.body.model, req.body.screen_size, req.body.in_storage, req.body.ex_storage, req.body.manufacturer, req.params.id];
        sql = mysql.pool.query(sql, inserts, function(error, results, fields) {
            if(error) {
                console.log(error)
                res.write(JSON.stringify(error));
                res.end();
            } else {
                res.status(200);
                res.end();
            }
        });
    });


   return router;
}();
