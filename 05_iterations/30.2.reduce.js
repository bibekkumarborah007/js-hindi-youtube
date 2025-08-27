//reduce: used in bills of shopping cart

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (accumulator,  currentvalue) {
//     console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`);
//     return accumulator + currentvalue
// },0);

// console.log(myTotal);

//in arrow fnc

const myNewTotal = myNums.reduce((accumulator,currretvalue) => accumulator + currretvalue, 0)
console.log(myNewTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "dsa course",
        price: 5999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);//9997

// const total = shoppingCart.map((i)=> i.price)
// console.log(total);//map in obj returns array