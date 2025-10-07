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

const priceToPay = shoppingCart.reduce((acc, currVal) => acc + currVal.price, 0)
console.log(priceToPay);
