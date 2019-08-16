module.exports = function() {
    var express = require('express');
    var router  = express.Router();
    var mysql = require('./dbcon.js');

    function getPhones(res, mysql, context, complete) {
        mysql.pool.query("SELECT * FROM ph_phone", function(error, results, fields) {
            if(error) {
                res.write(JSON.stringify(error));
                res.end();
            }
            context.phones = JSON.stringify(results);
            complete();
            });
    }

    function getAphone(res, mysql, context, id, complete) {
        var sql = "SELECT model, screen_size, in_storage, ex_storage, manufacturer FROM ph_phone where id = ?";
        var inserts = [id];
        mysql.pool.query(sql, inserts, function(error, results, fields) {
            if(error) {
                res.write(JSON.stringify(error));
                res.end();
            }
            context.phone = results[0];
            complete();
        });
    }

    router.get('/', function(req, res) {
        var context = {};
        context.jsscripts = ["deletephone.js"];
        mysql.pool.query('SELECT * FROM ph_phone', function(err, rows, fields) {
            context.results = rows;
            res.render('phone', context);
        });
    });


    router.get('/:id', function(req, res) {
        callbackCount = 0;
        var context = {};
        context.jsscripts = ["selectedphone.js", "updateperson.js"];
        var mysql = req.app.get('mysql');
        getAphone(res, mysql, context, req.params.id, complete);
        function complete() {
            callbackCount++;
            if(callbackCount >= 1){
                res.render('update-phone', context);
            }
        }
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






/*
    function serve_phone(req, res) {
        console.log("Asked for phones");
        var query = 'SELECT id, model, type, screen_size, in_storage, ex_storage, manufacturer FROM ph_phone';
        var mysql = req.app.get('mysql');
        var context = {};

        function handleRenderingOfPhones(error, results, fields){
            console.log(error);
            console.log(results);
            console.log(fields);

            contex.phones = results;
            res.render('phones', context)
        }
        mysql.pool.query(query, handleRenderingOfPhones)

    }

    function serve_one_phone(chicken, steak) {
        console.log(chicken.params.fancyID);
        console.log(chicken.params);
        fancyID = chicken.params.fancyID

        var queryString = "SELECT id, model, type, screen_size, in_storage, ex_storage, manufacturer FROM ph_phone WHERE id = ?"

        var mysql = steak.app.get('mysql')
        var context = {};

        function handleRenderingOfOnePhone(error, results, fields) {
            console.log("results are " + results)
            context.planet = results[0]
            console.log(context)

            if(error) {
                console.log(error)
                steak.write(error)
                steak.end();
            } else {
                steak.render('serverPhone', context);
            }
        }

        var queryString = mysql.pool.query(queryString, fancyID, handleRenderingOfOnePhone);

    }

    router.delete('/:id', function(req, res) {
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM ph_phone WHERE id = ?";
        var inserts = [req.params.id];
        sql = mysql.pool.query(sql, inserts, function(error, results, fields) {
            if (error) {
                res.write(JSON.stringify(error));
                res.status(400);
                res.end();
            } else {
                res.status(202).end();
            }
        })
    })

    router.get('/', serve_phone);
    router.get('/:fancyID', serve_one_phone);
    return router;

    */

   return router;
}();
