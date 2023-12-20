// for of (map, array)

// [{} {} {}]
// ["" "" ""]

let arr = ['smile', 'sad', 'happy', 'angry']

// for (const iterator of object) {
    
// }

for (const item of arr) {
    // console.log(item)
}

// map 

let m = new Map()
m.set('companyName', 'Witmates')
m.set('techStack', 'Javascript')
m.set('os', 'Linux')
m.set('companyName', 'Witmates') // no two keys can be same they contain unique keys maintain the order of them

// console.log(m);
// console.log(m.keys())
// console.log(m.values())
// console.log(m.has('os'))

for (const key of m) {
    // console.log(key)
}

for (const [key, value] of m) {
    // console.log(`${key}: ${value}`)
}



let personInfo = {
    firstName: 'Aakash',
    lastName: 'Khandelwal'
}

// obj is not iterable with for of
// for (const info of personInfo) { 
//     // console.log(info) 
// }

// for in (object, array)

for (const info in personInfo) {
    // console.log(info) // info is giving keys
}

for (const info in personInfo) {
    // console.log(personInfo[info])
}

for (const info in personInfo) {
    // console.log(`Key: ${info}, Value: ${personInfo[info]}`)
}

let ar1 = ['a', 'b', 'c', 'd']

for (const key in ar1) {
    // console.log(key)  // pring keys 0 1 2
}

for (const key in ar1) {
    // console.log(ar1[key])  // print a b c d
}

let map1 = new Map()

map1.set('name', 'Rahul')
map1.set('age', 33)

// console.log(map1)

for (const key in map1) {
    // console.log(key) // does not work with maps 
}

// forEach 

const countries = ['France', 'India', 'Berlin', 'Tokyo', 'USA']

countries.forEach(function(country){
    // console.log(country)
})

countries.forEach((country, index) => (console.log(`Country ${country} is at ${index} position`)))

// console.log(output)

countries.forEach((country, index, array) => (console.log(`Country ${country} is at ${index} position of Array ${array}`)))

const arrOfObj = [
    {
        firstName: 'Ram',
        lastName: 'Singh'
    },
    {
        firstName: 'Rahul',
        lastName: 'Kush'
    },
    {
        firstName: 'Chandan',
        lastName: 'Pandey'
    }
]

arrOfObj.forEach(function(ob, index){
    console.log(`First name of ${index+1} postion ${ob.firstName}`)
    console.log(`Last name of ${index+1} postion ${ob.lastName}`)
})