//object

// function multipleBy5(num){
//     return num*5
// }

// multipleBy5.power = 2

// console.log(multipleBy5(5));//25
// console.log(multipleBy5.power);//2 //js everything is object //in js fnc is fnc and fnc is also an object it works like fnc and can also behave like object if we want
// console.log(multipleBy5.prototype);//{}






//--------fnc

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++ //jisne bulaya usko bulao usinbg this.
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)//no context which to increment
const tea =  new createUser("tea", 250)

chai.printMe()
tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword inititaes the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor fnc. This means that it has access to properties and methods definded on the constructor's prototype.

The constructor is called: The constrcutor fnc is called with the specified arguments and this bound to newly created object. If no xeplicit return value is specified from the constructor. JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constuctor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


//above new keyword


// now prototype

