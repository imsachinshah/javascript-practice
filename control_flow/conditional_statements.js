
// if 

if (true) {
    // console.log('Hellooo')
}

let a = 51

// if else

if (a == 50) {
    // console.log('True')
} else {
    // console.log('False')
}

// if elseif 

if(a < 50){
    // console.log('A is < 50')
}
else if(a == 51){
    // console.log('A is 51')
} 
else{
    // console.log('A > 50')
}

// comparision

//  < > <= >= == === != !===  && || !

const st = ""

if(st){
    // console.log('String is not empty')
}
else{
    // console.log('String is Empty')
}

// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values  

// "false", "0", " ", [], {}, function(){}


// Switch Case

const month = 2

switch (month) {
    case 1:
        console.log('Jan')
        break;
    case 2:
        console.log('Feb')
        break;
    case 3: 
        confirm.log('March')
        break;
    default:
        console.log('Invalid Month')
        break;
}


// check array object is empty or not

const arr = []

if(arr.length == 0){
    // console.log('Array is empty')
}

const obj = {}

if(Object.keys(obj).length == 0){
    console.log('Object is empty')
}

// Nullish Operator

let val1 = null ?? 10
// let val1 = undefined ?? 20
// let val1 = 20 ?? 10 
// let val1 = 10 ?? 11 ?? null 

console.log(val1)


// Ternery Operator

let result = 2 == '2' ? true : false
console.log(result)