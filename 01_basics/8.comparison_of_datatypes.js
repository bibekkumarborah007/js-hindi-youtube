// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//typescript comes with strict rules for datatype, dont use different datatypes to compare in any case

// console.log("2" > 1);//convert 2 to number automatically
// console.log("02" > 1);

//avoid prefer clean code
console.log(null > 0);//false
console.log(null == 0);//fasle
console.log(null >= 0);//true

console.log(undefined == 0);//false
console.log(undefined >= 0);//false
console.log(undefined >= 0);//false

// === strictly equal to: checks value with datatype and unline conersion of equal to
console.log("2" == 2);//conversion only
console.log("2" === 2);//no conversion checks datatype