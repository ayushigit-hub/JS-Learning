const names = ["ayushi", "roshini", "disha"]
const names2 = ["vishu", "ayu", "mummy"]

// names.push(names2)
// console.log(names)

// here the names2 array is taken as an element

// const names3 = names.concat(names2)
// console.log(names3)

// push can be used in the existing array but to concat you have to use a new arr

// const names4 = [...names, ...names2]
// console.log(names4)

// spread method is prefered over concat

console.log(Array.isArray("Ayushi"))
console.log(Array.from("Ayushi"))

//coverts the value into an array

let price1 = 10
let price2 = 20
let price3 = 30

console.log(Array.of(price1, price2, price3))