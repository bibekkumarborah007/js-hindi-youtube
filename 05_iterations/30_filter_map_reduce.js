const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((i)=>{
//     console.log(i);
//     // return i// for each doesnt return anything
// })

// console.log(values);//undefined

//***** filter: inside filter there is callback fnc and then a condition is required to evaluate based on which it returns

const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

let newNums = myNums.filter( (num) =>{
    return num > 4
})

// console.log(newNums);


const newNum2 = []
myNums.forEach((i) => {
    if (i>4) {
        newNum2.push(i)
    }    
})
// console.log(newNum2);


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'History', publish: 1991, edition: 2005},
    {title: 'Book Three', genre: 'Non-Fiction', publish: 1981, edition: 2006},
    {title: 'Book Four', genre: 'Fiction', publish: 1997, edition: 2007},
    {title: 'Book Five', genre: 'Fiction', publish: 2001, edition: 2008},
    {title: 'Book Six', genre: 'History', publish: 2004, edition: 2009},
    {title: 'Book Seven', genre: 'Fiction', publish: 2005, edition: 2010},
]

let userBooks = books.filter( (bk) => bk.genre === "History")//filter with call back fnc and fnc iterates thorugh array
userBooks = books.filter((bk) =>{ 
    return bk.publish >= 2000 && bk.genre === "History"
}) //{} if used then return the value
console.log(userBooks);
