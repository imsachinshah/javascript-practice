// The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array

const a = ['a', 'b', 'z', 'f'];

const sorted = a.sort();

console.log(sorted); // [ 'a', 'b', 'f', 'z' ]

const b = ['a', 'B', 'z', 'f'];

const sortB = b.sort();

console.log(sortB); // [ 'B', 'a', 'f', 'z' ]

// we are getting this behaviour bcz sort() compairs the characters according to 

// sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// why js use UTF-16 not UTF-8 as it contains more chars like emogis, chinese chars and more

sortB.forEach((i) => {
    console.log(i, i.charCodeAt(0));
})

// B 66 so it comes first in sort
// a 97
// f 102
// z 122

// sort() can also accept comparator function which can we used for sorting more precisily

const num = [1, 4, 2, 100];

const sortNum = num.sort()

console.log(sortNum); // [ 1, 100, 2, 4 ] as it sorted a/t there charCode

num.forEach((n) => {
    console.log(n, String(n).charCodeAt(0));
});

// 1 ---- 49(charcode)
// 100 ---- 49
// 2 ---- 50
// 4 ---- 52

// so to sort() as apected we use comparator func 

const comparatorFunc = (a, b) => {
    if(a > b){
        return 1; // [b, a]
    } else if(a < b){
        return -1; // [a, b]
    } else{
        return 0; // no change
    }
}

const expectedNumSort = num.sort(comparatorFunc);

console.log(expectedNumSort); // [ 1, 2, 4, 100 ] expected sorting result

// this comparetor function can be converted in sort hand as in 

const compareShort = (a, b) => {
    return a - b; // if a > b, a-b = +ve, else if a < b, a-b = -ve, else a - b == 0
}

const num2 = [1, 3, 10, 2, 7, 9, 0];

const sortNum2 = num2.sort(compareShort);

console.log(sortNum2);

// [ 0, 1, 2, 3, 7, 9, 10 ]

// this comparatorfunc can also be used in sorting objects also based on conditions

const student = [
    { name: 'Rahul', age: 22 },
    { name: 'Ram', age: 25 },
    { name: 'Shahin', age: 17 },
    { name: 'Amar', age: 21 },
];

// sort according to age
const sortStudentByAge = (a, b) => {
    return a.age - b.age;
}

// sort according to name length
const sortStudentByName = (a, b) => {
    return a.name.length - b.name.length;
}

console.log(student.sort(sortStudentByAge));
console.log(student.sort(sortStudentByName));
