class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value //never use return in set
    }

    get password(){
        // return this.password.toUpperCase()
        return this._password.toUpperCase()
    }//get must have set also

    set password(value){
        // this.password = value // Maximum call stack size exceeded race between constructor and getter to set the password
        this._password = value // Maximum call stack size exceeded race between constructor and getter to set the password
    }
}

const bibek = new User("bibek@gmail.com", "Abc")
console.log(bibek.password);
console.log(bibek.email);



//NOTE: 
// 1.getter and setters are used when we want don't want to give password access to message or error when we dont want to
// 2. get must have set and never use return in set and always assign a value parameter