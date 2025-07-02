//array: js arrays are resizable

//array copy does shallow copy: a copy whose properties shares the same reference as that os source object whoch the copy is made i.e change in shallow copy also chanmges the source object or array from which the shallow array copy was created
//array deep copy: copy that do not share the same reference of main source object or array from where the deep copy array was created

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Bibek", "Kumar"]

const myArr2 = new Array(1 , 2, 3, 4) //another way to declare array
// console.log(myArr2[0]);

//methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)//adds element at starting of an array but not good for large numbers due to large shift
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr); //[ 1, 2, 3, 4, 5 ]
// console.log(typeof newArr); //string bind and convert to string







//slice and splice [0, 1, 2, 3, 4, 5] 
//replace.they return a section of array``

console.log("A", myArr); //A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1 ,3)
console.log("B", myn1); //[ 1, 2 ] /means it excludes the last index
// console.log("B", myArr); //[ 1, 2 ] /means it excludes the last index

const myn2 = myArr.splice(1 ,3)
console.log(myn2); //[ 1, 2, 3 ] means it includes the last index
console.log("C ", myArr);