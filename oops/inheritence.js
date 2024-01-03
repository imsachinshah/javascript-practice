class User{
    constructor(username){
        this.username = username;
    }

    userDetails(){
        return `User's username is ${this.username}`;
    }
}

class Developer extends User{
    constructor(username, name, company){
        super(username);
        this.name = name;
        this.company = company;
    }

    devDetails(){
        return `The Dev name is ${this.name} of company ${this.company}`;
    }
}

const dev1 = new Developer('codewithrahul', 'rahul', 'Witmates');

console.log(dev1);
console.log(dev1.devDetails());

console.log(dev1.userDetails()); // calling parent func from child

const user1 = new User('ram');

console.log(user1);
console.log(user1.userDetails());
console.log(user1.devDetails()); // parent object can't call child's methods