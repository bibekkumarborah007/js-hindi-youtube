//***************** for of ******************

// ["", "", ""]
// [{},{},{}]

// const arr = [1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
// }

// const greetings = "Hello world"
// for(const i of greetings){
//     console.log(`Each cha is: ${i}`);
// }

//Maps: The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Fr', "France")//only displays unique values and remain in same order

// console.log(map);

// for (const i of map) {
//     console.log(i);
        
// }//shows map in array values

//for individual values destructure of array
// for (const [key, value] of map) {
//     console.log(key, ":-", value);
        
// }


// const myObject = {
//     game1: "NFS",
//     game2: "Spiderman",
// }

// for(const iterator of myObject){
//     console.log(iterator);//myObject is not iterable
    
// }






//*********************** for in ***************************
const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
}

for(const key in myObj){
    // console.log(key);//js,cpp,rb,swift
    // console.log(myObj[key]);//javascript,c++,ruby,swift by apple
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}


//for in in objects

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//         console.log(programming[key]);
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('Fr', "France")//only displays unique values and remain in same order

// for (const key in map) {
//         console.log(key)//maps are non iterable
// }






// ***********************for each loop*******************

const coding = ["js","ruby", "java", "python", "cpp"]


//****** what is callback fnc in in foreach loop? 
// fnc assigned to does something and it must not have function name to be callback fnc and the iterator goes through each element of array

// coding.forEach( function (i){
//     console.log(i);
// })



// //******** arrow fnc
// coding.forEach(i =>{
//     console.log(i);
    
// })



// //------------fnc as param reference
// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)//fnc and param reference




// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);//prints and access to whole array with index
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }
]//have to learn as everything that comes in array comes with value of object only in db

myCoding.forEach((i)=>{
    console.log(i.languageName);
})