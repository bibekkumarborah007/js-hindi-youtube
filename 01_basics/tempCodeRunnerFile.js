let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

// `${newDate.getDay()} and the time`

newDate.toLocaleDateString("default", {
    weekday: "long"
})