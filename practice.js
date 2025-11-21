function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.isLoggedIn = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = () => {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User('hitesh', 12, true)
const userTwo = new User('bibek', 14, true)
console.log(userOne.constructor);
// console.log(userTwo);

