//6.datatype conversion

let score = "33"
// console.log(typeof score);

let valueInNumber = Number (score)
// console.log(typeof valueInNumber);

//problem in coversion due to explicit

// "33" => 33
// "33abc" => NaN
// true => 1; fasle => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=> true; 0 => fasle
// "" => false
// "bibek" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


