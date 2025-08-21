//old rare

const User = {
    _email: 'h@hc.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    }, //get: memory is leke au 
    set email(value){
        this._email = value
    }

}

//factory fnc

const tea = Object.create(User)
console.log(tea.email);
