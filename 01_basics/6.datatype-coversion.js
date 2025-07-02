//6.datatype conversion

let score = "33"
// console.log(typeof score); //string

//explicit typecasting
let valueInNumber = Number (score)
// console.log(typeof valueInNumber); //number

//problem in coversion due to explicit

// "33" => 33
// "33abc" => NaN
// true => 1; fasle => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//true

// 1=> true; 0 => fasle
// "" => false
// "bibek" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);//33
console.log(typeof stringNumber);//string