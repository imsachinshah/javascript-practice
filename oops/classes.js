class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    userDetails(){
        return `Username: ${this.username} and email: ${this.email}`;
    }

    encryptedPassword(){
        return `123${this.password}987`;
    }
}

const user1 = new User('ram', 'ram@gmail.com', 'abc');

console.log(user1);
console.log(user1.userDetails());
console.log(user1.encryptedPassword());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.userDetails = function(){
    return `Username: ${this.username} and email: ${this.email}`;
}

User.prototype.encryptedPassword = function(){
    return `123${this.password}987`;
}

const user2 = new User('ramu', 'ramu@gmail.com', 'mnb');

console.log(user2);
console.log(user2.userDetails());
console.log(user2.encryptedPassword());