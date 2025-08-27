//Promises: event completion or failure. Created then consumed

// fetch('https://something.com').then().catch().finally()

//-----------promise 1
// const promiseOne = new Promise(function (resolve,reject) {
//     //Do an async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log(`Async task is completed`);
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


//----------promise 2
// we can create promises without variable too

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log("Async 2 resolved");  
// })


//------ promise 3 promise with resolve paramter in obj or fnc

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({username: "Chai", email: "chai@example.com"})//parameter pass value using resolve to then only object like array, fnc
//     },1000)
// })

// promiseThree.then(function(user){//resolve parameter is passed into then function
//     console.log(user);
// })




//------ promise 4: error check file access or !access

// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = false
//         if(!error){//if no error or error not equal to
//             resolve({username: "bibek", password: "123"})
//         }else{//reject
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000);
// })

// promiseFour
// .then((user)=>{ //we can't use 
//     //only select username only from resolve
//     console.log(user);
//     return user.username //return is used in order to get key's values and futher chained with .then() to console.log()

// })
// .then((username)=>{     //parater can of any variable
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(() => {
//     console.log("The promise is either resolved or rejected");
// })


//------promise 5: different way asnc wait 

// const promiseFive = new Promise(function (resolve,reject) {
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username: "javascript", password: "123"})
//         }else{
//             reject('ERROR: JS went wrong')
//         }
//     },1000)
// })

//promise5's ----- async wait method instead of .then(): it wait a little when work then only goes to next byt doesnt directly handdle the error we need to wrap it up with try() and catch()

// async function consumedFive() { //need a async fnc name to be called along with try and catch. In try use await keyword
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumedFive()//can't handle the error directly we need to wrap with try and catch


//-----API generally in the form of arrays and recived in the form of string need to be converted into objects and JSON format and user

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')//we fetch JSON
//         // console.log(response); // not required
        
//         const data = await response.json()//data comes in string need to fetch in json format use await also
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);   
//     }
// }
// getAllUsers()


//--------------------------prev same in .then().catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);//return response must be handled
})
.catch((error) => console.log(error))