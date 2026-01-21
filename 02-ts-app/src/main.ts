// Day 03
// import getDailyRoutine, { getLuckyNumber, getQuote } from "./utils/fortune";

// import * as fortune from "./utils/fortune";

// console.log(RANDOM_NUMBER);

// console.log("Your lucky number today is ", getLuckyNumber());

// console.log(getQuote());

// console.log(getDailyRoutine());

// Day 02

// Explicit Type
let x: string;
x = "Hello World";
console.log(typeof x);

// Implicit Type
let y = 199;
console.log(typeof y);

// Custom Type
type MyCustomType = string | number;
let age: MyCustomType;
age = "Twenty Two";
age = 22;

let varAny: any;
varAny = "Hello";
varAny.toUpperCase();
varAny = 199;
varAny = true;
varAny = {};
varAny = () => {};

let varBool: boolean;
varBool = true;
varBool = false;

let varfunction: Function;
varfunction = () => console.log("Hello");

let varFunctionTwo: () => string;
varFunctionTwo = () => "Hello World!";

let varArray: Array<string>;
varArray = ["Monica", "Joey"];

let varTuple: [string, number];
varTuple = ["Ross", 24];

let varNull: null | string;
varNull = null;
varNull = "";

function throwError(): never {
  throw new Error("Always throw error");
}

let varUnknown: unknown;

varUnknown = "Hello";
if (typeof varUnknown === "string") {
  varUnknown.toLowerCase();
}
varUnknown = 199;
varUnknown = true;
varUnknown = {};

// Template Literals
// "" | '' | `` (back tick)
// - Embed variables within string without concat Op (+)
// - Multiline String without carriage return (\n)

// let username = "Monica Geller";
// let userage = 23;

// let greet = `Hello from ${username}!

// I'm ${userage} years old!

// `;

// console.log(greet);

// DEFAULT PARAMETER

// function demoParam(arr: Array<number> = []) {
//   if (arr.length > 2) {
//     console.log("Too High");
//   }
// }

// demoParam([1, 2, 3]);

// CLASSES
class Person {
  // private name: string;
  // private age: number;
  private _email: string;

  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this.age = age;
  // }

  constructor(
    private name: string,
    private age: number,
  ) {
    this._email = "";
  }

  get email() {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  getDetails() {
    return `Name : ${this.name} | Age : ${this.age}.`;
  }
}

// let personOne = new Person("Monica Geller", 23);
// // console.log(personOne.getDetails());
// personOne.email = "monica@test.com";
// console.log(personOne);

class Student extends Person {
  static studId: number = 0;

  constructor(
    private studName: string,
    private studAge: number,
    private course: string,
  ) {
    super(studName, studAge);
    Student.studId += 1;
  }

  getDetails(): string {
    return super.getDetails() + "\n" + "Course - " + this.course;
  }
}

let studOne = new Student("Ross", 24, "Awesome Angular");
let studTwo = new Student("Joey", 22, "Refresh React");

studOne.email = "ross@test";
studTwo.email = "joey@test";

console.log(studOne.getDetails());
console.log(studTwo.getDetails());
