// map
//  map() takes every item in an array, transforms it, and returns a new array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10)


//  map changes every element and returns a new array

const newNums = myNums
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter( (num) => num >= 40 )
console.log(newNums)
                                        
// called chaining where you can chain methods