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
  


var operation;
var selectOp = document.getElementById('selectOperations');
var options = document.getElementById('selectOptions');
selectOp.onchange = function(){
	operation = selectOp.value;
	//READ
	if(operation === "Read"){

		//Create a dropdown menu to choose an entity from
		var entities = document.createElement('select');
		var defaultOption = document.createElement('option');
		var option1 = document.createElement('option');
		var option2 = document.createElement('option');
		var option3 = document.createElement('option');
		var option4 = document.createElement('option');
		defaultOption.text = "Choose Entity";
		option1.text = "Carrier";
		option2.text = "Phone";
		option3.text = "Manufacturer";
		option4.text = "Owner";
		entities.add(defaultOption);
		entities.add(option1);
		entities.add(option2);
		entities.add(option3);
		entities.add(option4);
		options.appendChild(entities);
	}
	//CREATE
	else if(operation == "Create"){
		//Create a dropdown menu to choose an entity from
		var entities = document.createElement('select');
		var option1 = document.createElement('option');
		var option2 = document.createElement('option');
		option1.text = "Phone";
		option2.text = "Owner";
		entities.add(defaultOption);
		entities.add(option1);
		entities.add(option2);
		options.appendChild(entities);
	}
	//SEARCH
	else if(operation == "Search"){
	}
};

