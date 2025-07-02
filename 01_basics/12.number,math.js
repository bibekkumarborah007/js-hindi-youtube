//----------------------Numbers---------------------------
const score = 100
// console.log(score);

const balance = new Number(100) //when we need object number prefer the primitive one only
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance.toString());
// console.log(balance.toFixed(2)); //precision like ecommerce gts and tax

const otherNumber = 23.8966
const otherNumber2 = 123.8966
const otherNumber3 = 1123.8966
// console.log(otherNumber.toPrecision(3)); //use only when we know upto value as large number before decimal can give exponential value //23.9
// console.log(otherNumber2.toPrecision(3)); //124
// console.log(otherNumber3.toPrecision(3));//exponential value 1.23e+3

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN")); //10,00,000










//-----------------Maths-----------------
// console.log(Math); //more values in browser

// console.log(Math.abs(-4));//-ve to +ve

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));//5 takes upper value
// console.log(Math.floor(4.9));//4 takes lower value use cautiously rarely used

// console.log(Math.min(2,5,1,5,7,1,10))
// console.log(Math.max(2,5,1,5,7,1,10))

console.log(Math.random()); //gives value between 0 and 1 used in dice game
console.log((Math.random()*10)); //(*10) to ensure value greater than 1 to 9 but also include 0
console.log((Math.random()*10) + 1); //() + 1 to ensure value greater than 1 to 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //max and min range formula, + 1 to avoid decimal and +min to get above 10 value