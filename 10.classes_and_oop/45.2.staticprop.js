//staticprop

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username ${this.username}`);
    }

    //let we get once user is made a unqiue id created
    static createId(){ //we sometimes dont want this give this instance of class access to all in such case we use static keyword in class
        return `123`
    }
}

const bibek = new User("bibek")
// console.log(bibek.createId());




class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
// iphone.createId()//no access due to static