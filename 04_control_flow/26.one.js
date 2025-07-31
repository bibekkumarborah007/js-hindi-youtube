//control flow: the code that execute within conditions

//if

const isUserLoggedIn = true
const temp = 60

if(temp < 50){
    // console.log("executed");
}else{
    // console.log("temp greater than 50");
}

// <, >, <=, >=, ==, !=, ===, !==

//block scopes
const score = 200

if (score>100) {
    const power = "fly"
    // console.log(`User Power: ${power}`);
}

const bal = 1000

//implicit single line code for multiple use,

// if (bal>500) console.log("test"), console.log("test2")


//nesting

// if(bal < 500){
//     console.log("less than 500");
// }else if (bal < 750) {
//     console.log("less than 750");
// }else if (bal < 900) {
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");    
// }

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    // console.log("Allow to buy course");    
}

if(loggedInFromGoogle || loggedInFromEmail){
    // console.log("User logged in");
}


