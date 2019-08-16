var express = require('express');
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static('public'));
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);
app.use('/', express.static('public'));

app.get('/',function(req,res,next){
  var context = {};
  var createString = "CREATE TABLE diagnostic(" +
  "id INT PRIMARY KEY AUTO_INCREMENT," +
  "text VARCHAR(255) NOT NULL)";
  mysql.pool.query('DROP TABLE IF EXISTS diagnostic', function(err){
    if(err){
      next(err);
      return;
    }
    mysql.pool.query(createString, function(err){
      if(err){
        next(err);
		return;
      }
	  mysql.pool.query('INSERT INTO diagnostic (`text`) VALUES ("MySQL is Working!")',function(err){
	    mysql.pool.query('SELECT * FROM ph_man', function(err, rows, fields){
		  context.results = JSON.stringify(rows);
		  res.render('index',context);
		});
	  });
    });
  });
});

app.use('/phone/', require('./phone.js'));
app.use('/manufacturer/', require('./man.js'));
app.use('/owner/', require('./owner.js'));

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
