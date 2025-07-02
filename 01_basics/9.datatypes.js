//9 and 10

//1. Primitives call by copy

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 12345678910111213141516n


//2. Reference types or non primitive

// Types:
//Array, Objects, Functions

//js is dynamically typed lanuage we dont have to define the type of datatype the lanuage itself undertsnad the type





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//10.Stack and Heap Memoery in JS

//Stack (Primitive) => copy value, 
// Heap (Non-Primitive) => reference value, when changed original value also change

const heros =["shaktiman", "naagraj", "doga"]
const myObj = {
    name: "bibek",
    age: 23
}
console.log(typeof myObj); //object

const myFunction = function() {
    console.log("Hello World");
    
}
console.log(typeof myFunction); //object function



console.log(typeof scoreValue);



let myYTN ="bkb"
let anotherN = myYTN
anotherN = "bibek"

// console.log(myYTN); //bkb
// console.log(anotherN); //bibek

let userOne = {
    email: "bibekkumarborah@gmail.com",
    upi: "8638065884@yapl"
}

let userTwo = userOne
// console.log(userTwo); //{ email: 'bibekkumarborah@gmail.com', upi: '8638065884@yapl' }

userTwo.email = "rajpal@gmail.com"
// console.log(userTwo); //{ email: 'rajpal@gmail.com', upi: '8638065884@yapl' }

// console.log(userOne); //{ email: 'rajpal@gmail.com', upi: '8638065884@yal' } shallow copy