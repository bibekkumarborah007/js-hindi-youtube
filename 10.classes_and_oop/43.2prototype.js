//prototype


let myName = "bibek     "
// console.log(myName.length);
// console.log(myName.trim().length);



//we use trim() to trim the extra spaces
//Q. we create a method when we use a custom method like trueleghth it should trim the extra spaces and only evaluate the actual lenghth of the word

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spider power is ${this.spiderman}`);
        
    }
}

//we add fnc in object so that it can be in all as everything in js is object
Object.prototype.bibek = function(){ 
    console.log(`bibek is present in all objects`);
    
}

Array.prototype.heyBibek = function () {
    console.log(`Bibek says hello`);
}

// heroPower.bibek()
// myHeros.bibek()
// myHeros.heyBibek() //array->object->null

//-----// heroPower.heyBibek()


//------ inheritance

const User = {
    name: "chai",
    email: "cjai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fulltime: true,
    __proto__: TeachingSupport //inheritance of TS in TA inside object
}

Teacher.__proto__ = User //old way till now and inheritance of User in Teacher outside of object

//Modern syntax: hasOwnProperty,isPrototypeOf,

Object.setPrototypeOf(TeachingSupport, Teacher) //TS gets Inheritance of Teacher and .setPrototypeOf() is same as Selected_Object.__proto__ = Inherited object








//challenge: forget above code now only focus from here
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function (){
    console.log(`${this}`);//ref of this
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
    
}

anotherUsername.trueLength()

//eg another

let newUser = "Bibek Kumar Borah"
newUser.trueLength()

"rajpal".trueLength()
"rajpal       ".trueLength()