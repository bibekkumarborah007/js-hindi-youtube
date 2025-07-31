//truthy and falsy value

const userEmail = [] //"bkb@gmail.com"       //""  ->else   ,[] -> if

if(userEmail){
    // console.log("Got user email");
}else{
    // console.log("Don't have user email");
}

//***************************truthy and falsy: to determine when there is no value in variable for condition to run

//falsy value: false, 0, -0, BigInt, )navigator, "", null, undefined, NaN ----------> except these all the truthy values or if(cnd) works

//truthy values: "0" -> Zero Inside String
//  'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}


//************************Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// console.log(val1)//5 ;//sometimes data is called from db direct response is not possible. We get two values eg. two values or null resposnse affects the entrioe code structure.
// console.log(val1)//10
// console.log(val1)//15
// console.log(val1)//10



//Tertiary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
