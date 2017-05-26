" use strict ";

var display = document.getElementById ("display");
var numPets = prompt("How many pet's do you have?");
var typeOfPet = "";
var nameOfPet = "";
var answer = "";

class Animal{
	constructor(name){
		this.name = name;
	}
	speak(){
		return this.name + this.type +  " ";
	}
	getName(){
		return this.name;
	}
	setName(){
		return this.name;
	}
}

class Dog extends Animal{
	
	speak(){
		return ' bark';
	}
}

class Cat extends Animal{
	speak(){
		return ' meow';
	}
}

class Rabbit extends Animal{
	speak(){
		return " Whats's up Doc?"
	}
} 

for(var i = 0; i < numPets; i++){
	typeOfPet = prompt("Do you have a Dog, Cat, or Rabbit?");
	nameOfPet = prompt("What is its name?");
	if(typeOfPet === Dog){
		var pet = new Dog(name);
		var response = pet.getName() + " is a " + this.typeOfPet + " that says " + pet.speak();
	}
	else if(typeOfPet === Cat){
		var pet = new Cat(name);
		var response = cat.getName() + " is a " + this.typeOfPet + " that says " + cat.speak();
	}
	else if(typeOfPet === Rabbit){
		var pet = new Rabbit(name);
		var response = rabbit.getName() + " is a " + this.typeOfPet + " that says " + rabbit.speak();
	}
}

answer += response;
display.innerHTML += answer;

