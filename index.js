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
