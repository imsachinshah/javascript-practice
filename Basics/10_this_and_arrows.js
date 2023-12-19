const user = {
    firstName: 'Rahul',
    lastName: 'Singh',
    fullName: function() {
        console.log(this)
        console.log(`Full Name: ${this.firstName} ${this.lastName}`)
    }
}

// console.log(user.fullName())

// console.log(this) // gloabal object {} 

function check(str){
    // console.log(this)
    return str.toUpperCase();
}

// console.log(check('witmates'))

function checkThis(str){
    let st = str
    // console.log(this)
    return this.st; // this doesn't work in function which works in the case of objects
}

// console.log(checkThis('witmates'))

const fun = function(num1, num2){
    // console.log(this)
    return num1**num2;
}

// console.log(fun(2, 3))

// Arrow functions

const arrowOne = () => {
    return 'I am arrow 1 function return statement'
}

const arrowTwo = (num1, num2) => (num1*num2)

const arrowThree = (st1, st2) => ({string1: st1, string2: st2}) 

const arrowFour = (st1) => {string1: st1} // shows error as this {} is object but the for returning doesn't come in {} bracess

console.log(arrowOne())
console.log(arrowTwo(2, 4))
console.log(arrowThree('Ram', 'Naam'))
console.log(arrowFour('Tango Chalie'))


