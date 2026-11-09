// let a = {
//   name2: "sachin",
//   langugage: "javascript",

//   run: ()=>{
//     alert("self run")
//   }
// }
// console.log(a)

// let p = {
//   run: ()=>{
//     alert("run")
//   }
// }

// p.__proto__ ={
//   name : "sachin"
// }


// a.__proto__ = p
// a.run() 
// console.log(a.name)

// **************************************************
// function Person(){
//   this.name = 'John',
//   this.age = 25
// }
// const person1 = new Person();
// const person2 = new Person();

// Person.prototype.greet = function(){
//   console.log('Hello' + ' Dear ' + this.name);
// }

// person1.greet();
// person2.greet();

/********************************************/
// function Person(){
//   this.name = 'Sachin',
//   this.age = 23
// }

// // Creating Objects
//  const person = new Person();

// // Checking the packages value
// console.log(Person.prototype);


/********************************************/

// function Person(){
//   this.name = 'Jhon',
//   this.name = 23
// }
// // Creating objects
// const person1 = new Person();
// const person2 = new Person();

// console.log(Person.prototype);

/**********************************************/
// // Adding property to constructor function
// Person.prototype.gender = "male";

// // Prototype value of person
// console.log(Person.prototype);

// // Inherting the property from prototype
// console.log(person1.gender);
// console.log(person1.gender);

/***************************************/
//  function Person(){
//   this.name = 'Jhon'
// }

// // Add a Property
// Person.prototype.age = 20;

// // Creating an object
// const person1 = new Person();
// console.log(person1.age);

// // Changing the prototype value of prototype
// Person1.prototype = {age: 50};
// console.log(person1.age)

// // Creating new object
// // const person3 = new Person();
// // console.log(person3.age);
// // console.log(person1.age);

// /*==== Prototype Chaining ====*/
// // Constructor Function
// /* function Person(){
//   this.name = 'Jhon'
// }

// // Adding property
// Person.prototype.name = 'peter';
// Person.prototype.age = 23;

// const person1 = new Person();

// console.log(person1.name);
// console.log(person1.age);*/

// /*=======*/
// function Person(){
//  this.name = 'Jhon'
// }

// // adding a prototype
// Person.prototype.age = 24;

// // Creating Object  
// const person = new Person();

// Accessing prototype property
// console.log(person.__proto__);