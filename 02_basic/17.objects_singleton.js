//15. objects singleton or thorugh objects

// const tinderUser = new Object() //singleton object
// console.log(tinderUser); //{}


const tinderUser = {} //same but not singleton objkect

//to add new keys or ids
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

/*
nested objects
*/

const regularUser = {
    email: "some@gmail.comm",
    fullname: {
        userfullname: {
            firstname: "bibek",
            lastname: "borah",
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname); //? use instead of if else in APIs
 
/*
combing of objcets
*/

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj4 = {
    5: "e",
    6: "f"
}

// const objmergers = {obj1, obj2} //wrong nested object
// // console.log(objmergers); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//Object.assign(): static method copies all enumerable own properties from one or more source objects to a large object. It returns the modified target object
//less usage
// const obj3 = Object.assign({}, obj1, obj2, obj4) //empty {} is recommended for dynamic size of merge {}=>target, obj1 =>source


//90% of time usage using spread {...}
const obj = {...obj1, ...obj2, ...obj4} //contact doesnt work only spread
// console.log(obj);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


/*
Syntax when values comes from dB comes in array that includes objects
*/

const users = [
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 3,
        email: "d@gmail.com"
    }
]
 users[1].email
//  console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
 
//  console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
//  console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
 console.log(Object.entries(tinderUser)); [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

 console.log(tinderUser.hasOwnProperty("isLoggedIn"));//true //sometimes loop thorugh objects may not exist and chances of crash to check if it is there or nor in terms of boolean


 //for more to go broweser mdn docs inspect console: obj1 -> down arrow -> prototypes