// Array 
// String      =>   Object =>     null
// function 


let name = " hello world     ";

// console.log(name.trueLength());

let user = {
    name: "Sachin", 
    username: 'imsachinshah',
    email: 'hello@gmail.com',
    getUserDetails: function(){
        console.log(`Username: ${this.username}, email: ${this.email}`);
    }
}

let user2 = {
    name: "Rahul"
}

Object.prototype.greet = function(){
    console.log(`Hello world ${this}`)
}

// console.log(user.greet()); // print Hello world undefined
// console.log(user2.greet()); 

let lan = ['c++', 'python', 'java'];

Array.prototype.addHello = function(){
    this.push('hello');
    console.log(`hello added to ${this}`);
}

// lan.addHello();
// lan.greet();  // it can use object prototypes to 

// inheritence 

const Employee = {
    name: 'Ansh',
    email: 'ansh@gmail.com'
}

const EmployeeType ={
    type: 'fullTime'
}

const EmployeeCompany = {
    name: 'XYZ',
    __proto__: Employee
}

// mordern syntax 

Object.setPrototypeOf(EmployeeType, Employee);

// console.log(EmployeeCompany);
// console.log(EmployeeCompany.__proto__);
// console.log(EmployeeCompany.__proto__.name);

let str = "      helllllo    ";

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length of the string is ${this.trim().length}`)
}

str.trueLength();
'helloWorld'.trueLength();
