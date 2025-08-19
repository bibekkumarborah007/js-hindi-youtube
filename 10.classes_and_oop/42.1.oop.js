// const user = {

// }//object literal

const user = {
    username: "bibek",
    loginCount : 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);//bibek
        console.log(this);//all current context
        
        
    }
}

console.log(user.username);//bibek
// console.log(user.getUserDetails());

//----remember: using c.log(this) outside object in node env gives {} object       but in browser due to web apis c.log(this) gives window object (which is global object)
console.log(this);//{} empty object in node env

// const promiseOne = new Promise()
// const date = new Date()

//---Construction fucntion: always give new instances to play with context with old data

function User(username, loginCount, isLoggedIn) { //3 values and assign
    this.username = username //variable = value pass
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
        
    }

    return this //object this passed on: doesnt c.log without return this when an instance is c.log without new keyword with new keyword without return this possible
}

// //-----problem is wihout new keyword to determie as constrction fnc also next instance overwrites the old function

// const userOne = User("hitesh", 12, true)
// console.log(userOne);
// const userTwo = User("ChaiAurCode", 11, false)//value overwrites userOne
// console.log(userOne);


//right way to write construction instances: use new keyword

const userOne = new User("hitesh", 12, true)
console.log(userOne);
const userTwo = new User("ChaiAurCode", 11, false)//value overwrites userOne
console.log(userOne.constructor);
// console.log(userTwo);







// note on new keyword: 
// 1.New Empty Object is created: when we use "new" keyword a empty {} object is created first, which is called instance. 
// 2. Construction function called: constructor fnc is called due to new keyword where the arguments are packed and provided
// 3. This keyword injected in object: This keyword injected in the packed written arugments 
// 4. Display

//read Instance of:
function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
}
const auto = new Car("Rolls Royce", "Cullinan", 2025)
console.log(auto instanceof Car);// true

console.log(auto instanceof Object);//true