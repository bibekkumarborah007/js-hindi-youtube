const name = "bibek"
const repoCount = 50

// console.log(`Hello my name is ${name} and myu repo count is ${repoCount}`); //string interpulation

const gameName = new String("hitesh-hc-com")//object way
//methods

// console.log(gameName[0]);
// console.log(gameName.__proto__);//{}
// console.log(gameName.length); //to check length
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); //position
// console.log(gameName.indexOf('t'));//2
// console.log(gameName.length);

const newString = gameName.substring(0,4) //displays start and before end index
// console.log(newString); //hite

const anotherString = gameName.slice(-8, 4) //same to sunstring but it can allow negavtive -ve value
// console.log(anotherString);

const newStringOne = "      bibek      "
// console.log(newStringOne);
// console.log(newStringOne.trim()); //excludes the spaces within string

const url = "https://hitesh.com/hitesh%20choudhary" //replace() method
// console.log(url.replace("%20", "-")); //https://hitesh.com/hitesh-choudhary

// console.log(url.includes("hitesh")); //.include() method gives boolean result


//split() method
console.log(gameName.split("-"));