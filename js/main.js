var animals =[
  {name: 'Gigi', species: 'dog'},
  {name: 'Mitza', species: 'cat'},
  {name: 'Hera', species: 'dog'},
  {name: 'Freza', species: 'duck'},
  {name: 'Pisicul', species: 'cat'}
];

var  isDog = function(animal){
  return animal.species === 'dog';
}
var dogs = animals.filter(isDog);
