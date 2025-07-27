function one() {
    const username = "bibek"

    function two() {
        const website = "yt"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

one()




// ---------------- interesting -----------------
console.log(addOne(5))//6
function addOne(num) {
    return num + 1
}


// addTwo(10) => hoisting: determine how fnc is declared and stored
const addTwo = function addTwo(num) {
    return num + 2
}
console.log(addTwo(10));//6
