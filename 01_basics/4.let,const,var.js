//4.var const and let
//variables

const accountID = 144553
let accountEmail = "bibekkumarborah@gmail.com"
var accountPassword ="12345" //global scope
accountCity ="Jaipur" //also possible to declare variable but not recommended
let accountState; //undefined

// accountID = 2 

// console.log(accountID); //not allowed

accountEmail = "bkb@gmail.com"
accountPassword = "212121212"
accountCity = "Bengaluru"

console.log(accountID);

//tabular format
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

// Prefer to use var 
// beacuse of isssue in block scope and functional scope



//5.