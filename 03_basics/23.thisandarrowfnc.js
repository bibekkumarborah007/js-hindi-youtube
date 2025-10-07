//this is used in to reference to current context to value in object

const user = {
    username: "bkb",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome`);
        // console.log(this);//current context

    }
}

// user.welcomeMessage()
// user.username = "Bibek Kumar Borah"
// user.welcomeMessage()

// console.log(this);                    //{} empty object in node env    //in browser give global object: window object


//-----------arrow fnc()--------------

// function chai(){
//     let username = "bkb"
//     console.log(this.username);                     //undefined this works only in objects

// }
// chai()


const tea = () => {
    let username = "hitesh"
    console.log(this);// {} empty object in arrow fnc also

}

// tea()

const addTwo = (n1, n2) => {
    return n1 + n2
}
// console.log(addTwo(5,5));//10

// const addSumof = (n1,n2) => n1 + n2 //10 emplicit return
// const addSum = (n1,n2) => (n1 + n2) //if brackets used {} then must return and () emplicit return

const addThree = (n1, n2) => ({ username: "bibek" })//object return emplicit way must use () to make a scope for exceution
console.log(addThree(10, 20));





