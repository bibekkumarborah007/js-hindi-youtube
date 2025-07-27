// 25. How does JS execute code + call stack

/* JS Excetion Context: It is how to run and exceute the JS code
1.To run JS excuete the the code is run into 2 phase

Process:
    1.Global Excetion Context: must created and store in this keyword context. (This value is window in browser) works in thread
    2.Function Execution Context
    3.Eval EC //prop of global object //not needed

    JS Code -> Memory Creation Phase (Creation Phase) -> Execution Phase
    a. Memory Creation Phase: Memory allocation for declared var and alls
    b. EP: Performs the opeartions

    

{
function one(){
console.log("one")
    two()
}
function two(){
console.log("two")
    three()
}
function three(){
console.log("three")
}

one()
two()
three()    
}

*/