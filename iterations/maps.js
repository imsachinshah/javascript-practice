// map return array data and return the whole array according to conditions and does not change the original array

let nums = [1, 2, 3, 4, 5, 6, 7]

let result = nums.map( (num) => (num * 2))

// console.log(nums)
// console.log(result)

let result2 = nums.map( (num) => {
    return num + 10
})

console.log(result2)