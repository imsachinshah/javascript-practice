function isOdd(num){
    return num % 2 === 1;
}

isOdd.prime = true;

// console.log(isOdd(2));
// console.log(isOdd);
// console.log(isOdd.prime);
// console.log(isOdd.prototype); // {}
// console.log(isOdd.__proto__);

function createUser(username, email){
    this.username = username;
    this.email = email;
}

createUser.prototype.isValid = function(){
    return this.email.includes('@');
}

createUser.prototype.printUser = function(){
    console.log(`Username for user is ${this.username} and email is ${this.email}`);
}

const user1 = new createUser('ramesh', 'ramesh@gmail.com');
const user2 = createUser('rahul', 'rahulgmail.com');

user1.isValid() // not give error
// user2.isValid() // will give as it not initilise with new operator 

console.log(createUser.prototype) // { isValid: [Function (anonymous)], printUser: [Function (anonymous)] }