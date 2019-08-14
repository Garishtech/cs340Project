module.exports = function() {
    var express = require('express');
    var router  = express.Router();


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

    router.get('/', serve_phone);
    router.get('/:fancyID', serve_one_phone);
    return router;
}();
