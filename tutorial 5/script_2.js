 	var catNames= ['Pushok', 'Marsik', 'Marfik', 'Tusik']
 	var cat ={
 		name: catNames[random(0, catNames.lenght -1)],
 		color: 'orange',
 		len: 30,
 	};

 	var arrayCats = [cat, cat, cat];

 	for(var i = 0; i < arrayCats.lenght; i++)  {
 	console.log(arrayCats[1]);
 }
function random(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
} 
console.log(random(0, 5));
