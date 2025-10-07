//24. IIFE = Immediate invoked function Expression
//instant execution of the function. eg. db connection starts immediately when start

// function chai(){
//     console.log(`DB CONNECTED`);

// }
// chai()



//IIFE is used to avoid pollution of gloabl scope created based on declaration of varibles and immediately excecution of that fnc
(function chai() {//NOTE: This is called name IIFE
    console.log(`DB CONNECTED`);

})(); //<===== ; is required for more than IIFE functions

//()() -------------->start () where we write the fnc and next () for execution of the fnc

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);

})('bkb_inc')

//when two IFFE is used the function is invoked but doesnt know the context where to end so we need to close the first function with " ; " to run the next IIFE

//why use IIFE: to reduce the population created by global scope variable declaration we use IIFE with () inside fnc and ( ) after fnc and in order to use two IIFE we have to terminate the first IIFE fnc with ";" to run the next IIFE.

//What is named IIFE: A named function is called named IIFE and we have already done the eg along with an arrow function with parameters

