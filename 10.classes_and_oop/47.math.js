//check the task and solution at bottom

// Object.getOwnPropertyDescriptor() //to enable object iteratbilaty

// console.log(Math.PI)
// Math.PI = 5 // we are trying to overwrite the Math.PI value
// console.log(Math.PI); // we are unable to touch the object value


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);
/*
o/p: {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

NOTE: Here it shows the library is non writable and we can also create own and setup up custom library non writable 
*/




//-----------------------------------------
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai));// undefine
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

//------to write and config
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
 */

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
} //price : 250
// isAvailable : true





//search: objecy iteration property



//task:
Object.getOwnPropertyDescriptor(Math, "PI", {writable: true})
console.log(Math.PI = 3.4);



