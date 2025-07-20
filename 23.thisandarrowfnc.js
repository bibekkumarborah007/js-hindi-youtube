const user = {
    username: "bkb",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
        // console.log(this);//current context
        
    }
}

// user.welcomeMessage()
// user.username = "Bibek Kumar Borah"
// user.welcomeMessage()

// console.log(this);//{} object and in browser give global object is window object


//-----------arrow fnc()--------------

// function chai(){
//     let username = "bkb"
//     console.log(this.username);//undefined only in objects
    
// }
// chai()


const tea = () => {
    let username = "hitesh"
    console.log(this);
    
}

// tea()

const addTwo = (n1,n2) =>{
    return n1 + n2
}
// console.log(addTwo(5,5));

// const addSumof = (n1,n2) => n1 + n2
// const addSum = (n1,n2) => (n1 + n2)

const addThree = (n1,n2) => ({username: "bibek"})
console.log(addThree(10,20));





