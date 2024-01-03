console.log(typeof Math);
console.log(Math.PI);

// console.log(Object.getOwnPropertyNames(Math));
// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

let user = {
    username: 'ramsingh',
    name: 'Ram',
    email: 'ram@gmail.com',
    phone: 9888989898,

    getDetails: function(){
        return `Username: ${this.username} email: ${this.email}`
    }
}

// console.log(Object.getOwnPropertyDescriptors(user));

// console.log(Object.getOwnPropertyDescriptor(user, 'username'));

// for (let [key, value] of Object.entries(user)) {
//     if(typeof value != 'function'){
//         console.log(`${key} : ${value}`);
//     }
// }

Object.defineProperty(user, 'name', {
    writable: true,
    enumerable: false
});

// name will be not be enumerable in below loop as we have updated the descriptor of name property

// for (let [key, value] of Object.entries(user)) {
//     if(typeof value != 'function'){
//         console.log(`${key} : ${value}`);
//     }
// }

Object.defineProperties(user, {'username': {
    writable: false,
    enumerable: false
},
'email': {
    enumerable: false
} 
});

for (let [key, value] of Object.entries(user)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
    }
}

// we have defiine the username as writable: false so we can't change the value of username let's try

user.username = 'changeRamSingh';

console.log(user.username); // o/p ramsingth only 
