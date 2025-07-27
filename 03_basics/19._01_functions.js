//function: block of code into package which can be made into copies for reuse

function sayMyName() {
    console.log("B");
    console.log("I");
    console.log("B");
    console.log("E");
    console.log("K");
}

// sayMyName() //sayMyname -> ref sayMyName() -> execution

// function addTwoNumbers(num1, num2) { //i.p -> aruguments
//     console.log(num1 + num2); //only prints
// }

function addTwoNumbers(num1, num2) {
    // let numbers = num1 + num2
    // return numbers //by default after return function it doesnt excute anything after
    return num1 + num2
}
// addTwoNumbers(3,4) //arguments
const result = addTwoNumbers(3,4) //arguments
// console.log("result: ",result);

function loginInMessage(username = "sam") { // = "sam" means when empty use sam and overwrite when argument is entered
    if (!username) { //!username -> username === undefined written in react
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}
// console.log(loginInMessage("Bibek Kumar Borah")); //value returned by funtion need to be printed also or store in a var to display
// console.log(loginInMessage()); //if empty arugument -> undefined (interview question)





//-----------------------------more types of passing parameters in functions------------------------------

/*
//how multiple value is passed in function using rest ... operator 
*/
function calculateCarPrice(val1, val2, ...num1) { //... rest operator in function where it khula values into bundles converts the multiple aarguments into array for futher looping
    return num1
}

// console.log(calculateCarPrice(200, 400, 500, 2000)) //val1=200, val2=400, ...=500,200 into array

const user = {
    username: "bibek",
    price: 199 //change in keys can does errors typescript checks all
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
}

// handleObject(user)

//also

// handleObject({
//     username: "raj",
//     price: 299
// })






//array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
