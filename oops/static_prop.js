class User{
    constructor(username){
        this.username = username;
    }

    userDetails(){
        return `Username is ${this.username}`;
    }

    // ye function sab users ke liye nahi hai mtlb koi users is function ko use na kr ske uske liye isme static keyword lga hai 
    static createId(){
        return '123';
    }
}

const user1 = new User('ramu_kaka');

console.log(user1.userDetails());
// console.log(user1.createId()); // gives error as object can't call static methods

console.log(User.createId());
