// Primitives

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference types or non primitive

// Types:

//Array, Objects, Functions


//stack (Primitive) => copy value, Heap (Non-Primitive) => reference value

let myYTN ="bkb"
let anotherN = myYTN
anotherN = "bibek"

// console.log(myYTN);
// console.log(anotherN);

let userOne = {
    email: "bibekkumarborah@gmail.com",
    upi: "8638065884@yal"
}

let userTwo = userOne
// console.log(userTwo);

userTwo.email = "rajpal@gmail.com"
console.log(userTwo);

console.log(userOne);






