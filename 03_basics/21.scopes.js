//21. Scopes in JS

// {} => scope
//scopes are of two types: block scope and global scope

// var c = 300

let a = 300
if (true){
    let a = 10
    const b = 20
    var c = 30 
    // console.log("INNER: ", a);
      
}

// console.log(a);//
// console.log(b);
// console.log(c);


/*
interview question: browser and IDE node envirobnment has different gloabl scopes 
*/






//------------------22.Scope level and mini hoisting----------------------

function one() {
    const username = "bibek"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
one()

if (true) {
    const username = "bibek"
    if (username === "bibek") {
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

//------------------interesting---------------------

//type1
console.log(addOne(5))//6
function addOne(num) {
    return num + 1
}


//type2: const "addTwo" also called expression as the js var can hold anything like fnc, json value
addTwo(5) //fnc is called before fnc declaration fnc shows error (hoisting)
const addTwo = function(num){ //in js addTwo this is called expression can hold anything like function, JSON value, any value
    return num + 2
}



//hoisting:it defines how fnc is stored, their excetution context, var treatment and how final tree is creted where fncs are stored 
// error declaration of function with variable which is called hoisting