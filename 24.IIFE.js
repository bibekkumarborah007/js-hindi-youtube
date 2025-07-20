//24. IIFE = Immediate inovked function Expression
//instant execution of the function. eg. db connection starts immediately when start

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()



//IIFE is used to avoid pollution of gloabl scope creatd based on declaration and varibles
(function chai(){//NOTE: This is called name IIFE
    console.log(`DB CONNECTED`);
    
})();

//()()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('bkb_inc')

//when two IFFE is used the function is invoked but doesnt know the context where to end so we need to close the first function with " ; " to run the next IIFE

