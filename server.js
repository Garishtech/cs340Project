var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var hbs = require('handlebars');
var fs = require('fs');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.get('/', function(req,res,next){
		res.status(200).render('index');
});