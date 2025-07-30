//15.Objects in depth in JS
//in js learn atleast objects and events

//objects: objects can be declared in two ways
//1. literal 2. constructor

//singleton not formed in string format but always using constrctor
// Object.create //construcotr method also called singleton

//object literals


// const JSUSer = {} //object


//q. symbol question: use a symbol as key and print

const mySym = Symbol("key1")


const JsUser = { //key value pairs: keys: string
    name: "Bibek",
    "full name": "Bibek Kumar Borah", //cant access with . dot
    [mySym]: "myKey1", //[] refer to Symbol outside of object // Symbol used as a key
    age: 18,
    location: "Sivasagar",
    email: "bibekkumarborah@gmail.com",
    isLoggedIn: false,
    lastLoginDates: ["Monday", "Saturday"]
}

//how to access objects
// console.log(JsUser.email);
// console.log(JsUser["email"]); //also with [""] instead of . email is not defined if [] without ""
// console.log(JsUser["full name"]);

// // console.log(JsUser.mySym); //myKey1 but typeof String but need string
// console.log(JsUser[mySym]); //myKey1 ,typeof Symbol but shows string
// console.log(typeof JsUser[mySym]); //still string but prints to get [Symbol(key1)]: 'myKey1'


JsUser.email = "bkb@gmail.com"
// console.log(JsUser);

//way to freeze or lock the object
// Object.freeze(JsUser)
JsUser.email = "bkb@hotmail.com"
//printing after freeze but no change due to Object.freeze()
// console.log(JsUser);//here it shows symbol key*******************************


//adding functions in objects just like variables

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);//use this. when we need reference of the same object
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
