// reduce return the value of the calculation of the preceding elemets

let arr = [1, 2, 3, 4, 5]

let result = arr.reduce( (accValue, currValue) => (accValue + currValue), 0)

console.log(result)

let result1 = arr.reduce( (accValue, value) => {
    return accValue * value
}, 1)

console.log(result1)

let cart = [
    {
        itemName: 'Shirt',
        price: 400
    },
    {
        itemName: 'Bulb',
        price: 600
    },
    {
        itemName: 'Laptop',
        price: 60000
    },
    {
        itemName: 'Mobile',
        price: 40000
    }
]

let cartTotal = cart.reduce( (accValue, item) => ( accValue + item.price), 0)

console.log(cartTotal)