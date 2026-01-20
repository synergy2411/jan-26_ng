// Day 01

// function longRunningOps() {
//   setTimeout(function () {
//     console.log("Running");
//   }, 1500);
// }

// function webRequest(req) {
//   console.log("Start - ", req.reqId);
//   longRunningOps();
//   console.log("End - ", req.reqId);
// }

// webRequest({ reqId: 101 });
// webRequest({ reqId: 102 });

// OUTPUT
// - Start - 101
// - END - 101
// - Start - 102
// - End - 102
// - Running (after 1500 ms)
// - Running (after 1500 ms)

// let marks = [99, 98, 93, 91, 89];
// let total = 0;

// Declarative Approach
// for (var i = 0; i < marks.length; i++) {
//   total += marks[i];
// }

// Imperative Approach - Enhanced for loop
// for (let mark of marks) {
//     total += mark;
//  }

// Functional Approach
// marks.forEach(function (mark) {
//   total += mark;
// });

// console.log("Total : ", total);

// var x;
// x = "Hello World";
// console.log(typeof x); // string

// x = 101;
// console.log(typeof x); // number

// x = true;
// console.log(typeof x);

// let x = 20;
// let y = "20";
// console.log(x == y); // 'loose checking'
// console.log(x === y); // 'strict checking'

// let z = "10";

// console.log(x + z); // 2010
// console.log(x / z); // 10

// ARROW FUNCTION
// - No 'arguments' keyword
// - Can't call with 'new' operator
// - No more ambigious 'this' reference

// var add = (n1, n2) => n1 + n2;

// console.log("Add : ", add(4, 5));

// var sqrt = (n1) => {
//   console.log("Number : ", n1);
//   console.log(arguments);
//   return n1 ** 2;
// };

// console.log("Square : ", sqrt(7));

// No 'Arguments'
// function add() {
//   console.log(arguments);
// }

// add(10, 20, 30, 40);

// Constructor Function (ES5)
// function Student(studId, name) {
//     this.studId = studId;
//     this.name = name;
// }

// var john = new Student("s001", "John Doe")

// var user = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName: function () {
//     // var that = this;
//     // return function () {
//     //   return that.firstName + " " + that.lastName;
//     // };
//     return () => this.firstName + " - " + this.lastName;
//   },
// };

// var nestedFunction = user.getFullName(); // ?

// console.log("Full name : ", nestedFunction());

// alert("Hello World")

// // var x = 301;            // Global Scope
// function a() {
//   //   var x = 101;          // Outer Scope
//   function b() {
//     // var x = 201;         // Local Scope
//     console.log(x); // ?
//   }
//   b();
// }

// a();

// Lexical Scoping : Physical presence of a function

// function b() {
// //   var x = 199;
//   console.log(x);
// }

// function a() {
//     var x = 299;
//   b();
// }

// a();

// BLOCK SCOPING
// - let
// - const

// Variable Hoisting
// function demoScope(arr) {
//   if (arr.length > 2) {
//     let LOAD = "LOADING...";
//     console.log(FLASH); // undefined
//   } else {
//     let FLASH = "FLASHING...";
//   }
// }

// demoScope([2, 3, 4, 5]);

// const username = "John Doe";
// username = "Mary Public";

// const user = {          // xixooo123
//   name: "John",
// };

// user.name = "Mary";

// console.log(user.name); // ?

// user = {                // xix000456    ERROR
//     name : "Monica"
// }

// const friends = ["Monica", "Ross", "Rachel"];

// friends.push("Joey");

// friends = ["Monica", "Ross", "Rachel", "Joey"]; // ERROR

// console.log(friends.length); // ?

// REST OPERATOR (...)
// - Creates collection from individual items
// - Rest should be last parameter

// function demoRest(email, isAdmin, ...args) {
//   console.log(args[0]); // ?
// }

// // demoRest("test@test.com")
// // demoRest("test@test.com", true)
// demoRest("test@test.com", true, 23);

// SPREAD OPERATOR (...)
// - Spreads the collection into individual items

// let marks = [99, 98, 93, 91, 89];

// marks = [85, ...marks];

// console.log(marks); // [85, [99,98,93,91,89]]

// let userOne = {
//   name: "Monica",
//   company: "XYZ Inc",
// };

// let userTwo = {
//   ...userOne,
//   name: "Ross",
// };

// console.log(userTwo); // {name : "Ross", company : "XYZ Inc"}

// DESTRUCTURING

// let friends = ["Monica", "Ross", "Rachel", "Joey"];

// let [, , , f4] = friends;

// console.log(f4);

// let userOne = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 23,
//   email: "john@test",
// };

// let userTwo = {
//   firstName: "Monica",
//   lastName: "Geller",
// };

// let { lastName: userOneLN, firstName: userOneFN } = userOne;
// let { firstName: userTwoFN, lastName: userTwoLN } = userTwo;

// console.log(userOneFN, userOneLN);
// console.log(userTwoFN, userTwoLN);

// let userOne = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 23,
//   email: "john@test",
//   address: {
//     street: "201 Main Road",
//     city: "Pune",
//   },
//   friends: ["Monica", "Ross", "Joey"],
// };

// let {
//   firstName,
//   lastName,
//   age,
//   email,
//   address: { street, city },
//   friends: [f1, f2, f3],
// } = userOne;

// console.log(lastName, email, city, street, f2);

// let employees = [
//   { email: "monica@test", age: 22 },
//   { email: "ross@test", age: 23 },
//   { email: "joey@test", age: 24 },
// ];

// let [userOne, userTwo, userThree] = employees;
// let { email: u1Email, age: u1Age } = userOne;
// let { email: u2Email, age: u2Age } = userTwo;

// let [
//   { email: userOneEmail, age: userOneAge },
//   { email: userTwoEmail, age: userTwoAge },
//   { email: userThreeEmail, age: userThreeAge },
// ] = employees;

// Closure : process of binding the outer scope variable with nested function
// function mystry() {
//   let x = 4;

//   return function () {
//     return ++x;
//   };
// }

// let nestedFn = mystry();

// console.log(nestedFn);

// console.log("X - ", nestedFn()); // 5
// console.log("X - ", nestedFn()); // 6

// function buildTicket(transport) {
//   let numOfPassengers = 0;

//   return function (passengerName) {
//     return (
//       "Hello " +
//       passengerName +
//       "\n" +
//       "You are going via " +
//       transport +
//       "\n" +
//       "Your Ticket Number is " +
//       ++numOfPassengers
//     );
//   };
// }

// let shipFn = buildTicket("Ship");

// console.log(shipFn("Monica"));
// console.log(shipFn("Rachel"));

// let kangrooFn = buildTicket("Kangaroo");

// console.log(kangrooFn("Ross"));
// console.log(shipFn("Joey"));

// Callbacks

// function greet() {
//   console.log("Hola");
// }

// function demoGreet(cb) {
//   cb();
// }

// demoGreet(greet);

// setTimeout(() => { }, 1500);
