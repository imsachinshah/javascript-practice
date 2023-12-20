// filters return the collection based on the condition given

let arr = ['man', 'woman', 'girl', 'boy']

// arr.filter( () => () )

let result = arr.filter((item, index) => {
    return item.length > 3
});

console.log(result) // o/p [ 'woman', 'girl' ]

let personData = [
    {
        name: 'Ram Singh',
        age: 22,
        location: 'Indore',
        tech: 'C++'
    },
    {
        name: 'Kamini Singh',
        age: 25,
        location: 'Banglore',
        tech: 'Ruby'
    },
    {
        name: 'Nitesh Singh',
        age: 25,
        location: 'Indore',
        tech: 'Javascript'
    },
    {
        name: 'Mohini Pandey',
        age: 26,
        location: 'Indore',
        tech: 'React'
    },
    {
        name: 'ragini',
        age: 27,
        location: 'Pune',
        tech: 'SQL'
    },
]

let filterData = personData.filter( (data) => ( data.location == 'Indore' && data.age > 22 ))
console.log(filterData)