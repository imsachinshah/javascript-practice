const user = {
    username: "imsachinshah",
    age: 22,
    company: "Witmates",

    getDetails: function(){
        console.log(this);
        console.log(`Username: ${this.username}, Company: ${this.company}`);
    }
}

// console.log(user);
// console.log(user.getDetails());
// console.log(this);

// constructor function

function User(username, age, location){
    this.username = username;
    this.age = age;
    this.location = location;

    this.userDetails = function(){
        console.log(`Username: ${this.username}, from ${this.location}`);
    }

    return this;
}

const user1 = User("hello", 12, "Indore");
const user2 = User("helloWorld", 20, "Mumbai"); // it override the User constructor function

// console.log(user1);

// to stop override we have a new for creating the instance for the constructor functions

const user3 = new User('mohanyadav', 55, 'Bhopal');

console.log(user3);
console.log(user3.constructor);

