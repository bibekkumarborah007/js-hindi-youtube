//6.datatype conversion

let score = "33"
// console.log(typeof score); //string

//explicit typecasting
let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number

let score2 = "33abc"
// console.log(typeof score2);
let ans1 = Number(score2)
// console.log(ans1);//NaN

let score3 = null
// console.log(typeof score3);//Object
let ans2 = Number(score3)
// console.log(ans1);//NaN


//problem in coversion due to explicit

// "33" => 33
// "33abc" => NaN Converts String to Number but log shows NaN after conversion
// true => 1; fasle => 0

let isLoggedIn = 1 //1,"",bibek"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//true

// 1=> true; 
// 0 => fasle
// "" => false
// "bibek" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);//33
console.log(typeof stringNumber);//string