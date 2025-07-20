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
console.log(addOne(5))//6
function addOne(num) {
    return num + 1
}


addTwo(5) //error declaration of function with variable which is called hoisting
const addTwo = function(num){ //in js addTwo this is called expression can hold function, JSON value, any value
    return num + 2
}