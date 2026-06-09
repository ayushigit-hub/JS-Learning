// const arr = [0, 1, "ayushi", true]
const arr = [0,1,2,3,4,5]
const names = ["Ayushi", "Abhi"]
const arr2 = new Array(1, 2, "Ayushi", false)
console.log(arr[0])

// array methods 

arr.push(6)
arr.push(7)
console.log(arr)

// adds value into the array 

arr.pop()
console.log(arr)
// removes last value from the array 

arr.unshift(67)
console.log(arr)

// adds elements at the start of the array

arr.shift()
console.log(arr)

// removes first element from the initial point of the array

console.log(arr.includes(9))

// check if the value is in the array

console.log(arr.indexOf(9)) //checking index of the value that does not exist
console.log(arr.indexOf("ayushi")) //checking index of the value that does exist

// shows index of the element

const newArr = arr.join

console.log(newArr)
console.log(arr)
console.log(typeof newArr)

// slice, splice

console.log("A", arr)

const myn1 = arr.slice(1,3)
console.log(myn1)
console.log("B", arr)

const myn2 = arr.splice(1,3)
console.log("C", arr) 
console.log(myn2)

// splice manipulated the orignal array overall