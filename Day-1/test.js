const iAmConstant = 123
var email = "email@gmail.com"
let password = "Sachin123"

// we dont use var as it not works in blocks and scopes

for (let index = 0; index < 5; index++) {
    var email = "hi"
    let password = 'hello'
}

let firstName = 'Rahul'
let lastName = 'Kushwaha'
let companyName = 'Witmates Technologies'
let techStack = 'Ruby on Rails'
let salary

console.log(email) // output - hi
console.log(password)

console.info('Info...')
console.error('hey, i am error')

console.table([firstName, lastName, companyName, techStack, salary])