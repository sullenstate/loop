// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// for(var i = 0; i<animals.length; i++) {
// 	console.log(animals[i]);
// 	for (var j = i; j > 0 && j < animals.length - 1; j += animals.length) {
// 		console.log(animals[j]);
// 	}
// }

// >>>>>>>> Loop Practice #3 <<<<<<<<
var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

for(var i=0; i<students.length; i++) {
	if (students[i].city === 'Boulder') {
	 	console.log(students[i].name + ' is from ' + students[i].city);
	}
}

students.map(function(element){
	console.log(element.name + ', ' + element.city)
});

students.map(function(element){
	if (element.age > 25) {
		console.log(element.name + ' is older than 25!');
	}
});


// >>>>>>>> End Loop #3 <<<<<<<<