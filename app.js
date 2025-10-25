// alert("js is connect");

// var car ={
//     brand : "toyota",
//     model : "corola",
//     year : 2025,
// }

// car.color="red";
// delete car.year
// console.log(car);

// console.log(car.brand);
// console.log(car.model);
// console.log(car.year);

// var person = {
//     name : "ali",
//     age : 19,
// }

// console.log(person.age);
// console.log(person["name"]);

// var student = {
//     name : "ali",
//     marks : 90,
// };

// student.showMarks = function(){
//     alert(this.marks);
// };

// student.showMarks();

// var user = {
//     name : "ali",
//     age : 19,
//     addres:{
//         city:"karachi",
//     }
// };

// console.log(user.addres);

// var book = {
//     title : "javaScript",
//     author : "jhon",
//     year : 2025
// };

// for (var key in book){
//     console.log(key, book[key]);

//pg 1 end

// }

// var phone = {
//     brand : "redmi",
//     year : 2025,
//     price : 30000,
// }

// console.log("camra" in phone);
// console.log( "brand" in phone);

// var obj = {
//     name : "ali",
//     city : "karachi",

// }

// var count = 0;
// for(var key in obj){
//     count++;
// }
// console.log("total properties :" , count);

// var obj = {
//     name : "ali",
//     age : 19,
// }

// var arr = [];
// for (var key in obj){
//     arr.push(key);
// }

// console.log(arr);

// var animal = {
//     animal: "cat",
//     color: "white",
//     age : 2
// }

// var newAnimal = {};
// for (var cat in animal){
//     newAnimal[cat] = animal[cat]
// }

// console.log(newAnimal);

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// function Person(name,age){
//     this.name = name,
//     this.age = age,
//     this.sayHi = function(){
//         alert("hi " + this.name)
//     }
// }

// var p1 = new Person("ali", 19);

// p1.sayHi();

// function Person(name) {
//   this.name = name;
//   this.sayHi = function() {
//     console.log("Hi, I am " + this.name);
//   };
// }

//pg 2 end

// var p1 = new Person("Ali");
// var p2 = new Person("Ahmed");

// p1.sayHi();
// p2.sayHi();

// function Person(name, age) {
//   this.name = name;
//   this.age = age || 18;
// }

// var p1 = new Person("Ali");
// var p2 = new Person("Zain", 25);

// console.log(p1.age);
// console.log(p2.age);

// function Person(name, age) {
//   this.name = name;
//   this.age = age || 18;
// }

// var p1 = new Person("Ali");
// p1.city = "Karachi";

// console.log(p1.city);

// function Engine(type) {
//   this.type = type;
// }
// function Car(model, engineType) {
//   this.model = model;
//   this.engine = new Engine(engineType);
// }

// var car1 = new Car("Civic", "V8");
// console.log(car1.engine.type);




// function Person(name) {
//   this.name = name;
//   return { name: "Custom", age: 30 };
// }

// var p1 = new Person("Ali");
// console.log(p1.name);
// console.log(p1.age);

// function Student(name, marks) {
//   this.name = name;
//   this.marks = marks;
// }

// var students = [
//   new Student("Ali", 90),
//   new Student("Sara", 85),
//   new Student("Bilal", 80)
// ];

// console.log(students);

// 3 page done

// Person.prototype.greet = function () {
//   alert("Hello!");
// };

// p1.greet === p2.greet;

// Person.prototype.species = "Human";

// p1.greet = function () {
//   alert("Hi there!");
// };

// 'greet' in p1;


// Person.prototype.eat = function() {
//   alert('Eating...');
// };
// Person.prototype.sleep = function() {
//   alert('Sleeping...');
// };

//pg 4 done


// Car.prototype.getInfo = function() {
//   return this.brand + ' ' + this.year;
// };


// c1.getInfo === c2.getInfo


// alert(c1.constructor === Car);


// for (var key in Animal.prototype) {
//   Dog.prototype[key] = Animal.prototype[key];
// }
