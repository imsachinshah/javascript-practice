let User = {
    _email: 'hey@gmail.com',
    password: 'abc12',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }

};

const user = Object.create(User);

console.log(user.email);