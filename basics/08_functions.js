// functions

function printSomething() {
    console.log("I am something (:")
}

// printSomething()

function sayHello(){
    return 'Hello';
}

// console.log(sayHello())

function sum(num1, num2){
    return num1 + num2;
}

let output = sum(5, 6)
// let output = sum(5, '7')
// let output = sum('7', '8')
// let output = sum(5, )

// console.log(output)

function check(str){
    if(!str){
        return "No Value given"
    }
    return `Value is ${str}`;
}

// console.log(check('hello'))
// console.log(check())

const ob = {
    firstName: 'Ram',
    lastName: 'Singh'
}

function fullName(obj){
    return ` Full Name is ${obj.firstName} ${obj.lastName}`
}

// console.log(fullName(ob))

let arr = [2, 3, 4, 5, 6]

function arrayFuc(arr){
    return arr.length;
}

// console.log(arrayFuc(arr))

function multiple(value1, value2, value3, ...last){
    return last;
}

let out = multiple(2, 3, 9, 0, 8, 0, 9, 10)
// console.log(out)

const parent = (n) => {
    const num = n;
    return function(num){
        return num;
    }
}

console.log(parent(10));
console.log(parent()(10));
console.log(parent(10)());

let funcName = function sum(a, b){
    return a+b;
}

console.log(funcName.name)