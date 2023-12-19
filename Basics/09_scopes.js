// let a = 35
// var b = 60
// const c = 69
var b = 9

if(true){
    let a = 35
    var b = 60
    const c = 69
}

// console.log(a)
console.log(b)
// console.log(c)

function first(){
    const name = 'Rahul'
    function second(){
        const company = 'AI Trillion'
        console.log(name)
    }
    second()
    // console.log(company) // error out of scope
}
first()
// console.log(name) // error out of scope

// one() work fine when callled above the function definitions

function one(){
    return 'One'
}

// one() work fine

// two() // throws error when the two() called above the definitions when function is assigned in a variable 

const two = function(){
    return 'Two'
}

// two() workfine when the two called after definination