//date single moment

let myDate = new Date() //date object
// console.log(myDate);//2025-06-27T21:30:13.554Z
// console.log(myDate.toString()); //Wed Jul 02 2025 20:38:12 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString()); //2/7/2025
// console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

// let myCreatedDate2 = new Date("2023-01-14")
// let myCreatedDate2 = new Date("01-12-2023")
// console.log(myCreatedDate2.toLocaleTimeString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); //1751469554180 //latest time in ms
// console.log(myCreatedDate.getTime()); //since date object we can get type methods



//coversion from ms to s with floor to get single digit value
// console.log(Date.now()/1000);//wrong //1751469638.809 ms to s in decimal
// console.log(Math.floor(Date.now()/1000)); //1751469638 in ms to s


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //since array index
console.log(newDate.getDate());//19

// `${newDate.getDay()} and the time`

newDate.toLocaleDateString("default", {
    weekday: "long", //customize
})