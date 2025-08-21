//inheritance

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(a, email, password){
        super(a) // super keywords automatically refers to extends and give access to the extends class members
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.usernames}`);
        
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123" )
// console.log(chai);

chai.addCourse() // A new course added by chai

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai instanceof Teacher);

