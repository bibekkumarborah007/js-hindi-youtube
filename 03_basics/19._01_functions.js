//function: block of code into package which can be made into copies for reuse

function sayMyName() {
    console.log("B");
    console.log("I");
    console.log("B");
    console.log("E");
    console.log("K");
}

// sayMyName() //sayMyname -> ref sayMyName() -> execution

// function addTwoNumbers(num1, num2) { //i.p -> arguments
//     console.log(num1 + num2); //only prints
// }

function addTwoNumbers(num1, num2) {
    // let numbers = num1 + num2
    // return numbers //by default after return function it doesn't excute anything after
    return num1 + num2
}
// addTwoNumbers(3,4) //arguments
const result = addTwoNumbers(3,4) //arguments
// console.log("result: ",result);

function loginInMessage(username = "sam") { // = "sam" is default value means when fnc is called without arguments then sam display as default value
    if (!username) { //!username -> username === undefined written in react
        console.log("Please enter a username");
        return //used return so that when undefined satisfies after console the next return value is not excuted
    }
    return`${username} just logged in`
}
// console.log(loginInMessage("Bibek Kumar Borah")); //value returned by funtion need to be printed also or store in a var to display
// console.log(loginInMessage()); //if empty arugument -> undefined (interview question)





//-----------------------------more types of passing parameters in functions------------------------------

/*
//how multiple value is passed in function using rest ... operator 
*/

function cal(num1){
    return num1
}
// console.log(cal(100,200,300));//100 only

function cal2(...num1){//... rest operator
    return num1
}
// console.log(cal2(100,200,300));//display all in array using rest operator


function calculateCarPrice(val1, val2, ...num1) { //... rest operator in function where it khula values into bundles converts the multiple arguments into array for futher looping
    return num1
}

// console.log(calculateCarPrice(200, 400, 500, 2000)) //val1=200, val2=400, // ...=500,2000 into array



//*********** taking obj as fnc input, typechecking is important else undefined
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
// console.log(returnSecondValue(myNewArray));//400
// console.log(returnSecondValue([200, 400, 500, 1000]));//400
