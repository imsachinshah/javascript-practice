// Objects...

const obj = {
    firstName: "Sachin",
    lastName: "Shah",
    age: 22
}

const o = new Object();

var ob = Object.create({"username": "imsachinshsh"})

// console.log(obj)
// console.log(obj.firstName)
// console.log(obj.age)
// console.log(obj["age"])
// console.log(typeof obj)
// console.log(ob.username)

const obj2 = {
    company: 'Witamtes',
    techStack: 'React',
    salary: 40000,
    gadgets: ['Apache', 'Macbook', 'Audi', 'iPhone' ],
    brand: {
        bike: 'TVS',
        laptop: 'Apple',
        car: 'Audi',
        phone: 'Apple'
    }
}

// console.log(obj2)
// console.log(obj2.company)
// console.log(obj2.gadgets)
// console.log(obj2.gadgets[1])
// console.log(obj2.gadgets[2])
// console.log(obj2.brand)
// console.log(obj2.brand.bike)
// console.log(obj2.brand["bike"])
// console.log(obj2['brand']["bike"])

// for (const i in obj2) {
// //    console.log(obj2[i])
//    for(let j in obj2.gadgets){
//         console.log(obj2.gadgets[j])
//    }
// }

// console.log(obj2)
// console.log(Object.values(obj2))
// console.log(JSON.stringify(obj2))

const obj3 = {}

obj3.firstName = "Kalli"
obj3.lastName = "Pandey"

// console.log(obj3)

const obj4 = {
    name: 'Rahul',
    job: 'Developer',
    company: 'Mikeee',
    resume: function () {
        return `Hello, I am ${this.name}, I am working as a ${this.job} in ${this.company} company.`;
    }
}

// console.log(obj4)
// console.log(obj4.job)
// console.log(obj4.resume)
// console.log(obj4.resume())

// console.log(JSON.stringify(obj4)) // will not stringify the functions

const obj5 = {
    name: 'Tiger',
    place: 'Forest',
    eat: 'NonVeg'
}

// console.log(obj5)

delete obj5.eat

// console.log(obj5)

// join two or more objects

const sum = Object.assign({}, obj2, obj3, obj4, obj5)
const sum1 = {...obj2, ...obj3} // using seperator

// console.log(sum)
// console.log(sum1)

console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(Object.entries(obj3))
console.log(Object.getOwnPropertyNames(obj3))
