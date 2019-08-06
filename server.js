var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var hbs = require('handlebars');
var fs = require('fs');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')
app.set('port', process.argv[2]);

app.use(express.static('public'));

//Index/main page
app.get('/', function(req,res,next){
		res.status(200).render('index');
});

//Phone page

//Owner page

//Error pages
app.use(function(req,res){
	res.status(404);
	res.render('404');
  });
  
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

//Will listen on whatever port is supplied on the command line
app.listen(app.get('port'), function(err){
	if(!err)
		console.log('http://localhost:' + app.get('port'));
});
  

