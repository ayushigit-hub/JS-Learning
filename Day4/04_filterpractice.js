// filter even numbers
const numbers = [1, 2, 3, 4, 5, 6]
const evens = numbers.filter(num => num % 2 === 0)
// console.log(evens)

// filter names longer than 4 letters
const names = ["Ayushi", "Abhishek", "Vishu", "Rishi"]
const longnames = names.filter( name => name.length > 4)
// console.log(longnames)

// filter objects
const students = [
    { name : "A", marks: 80 },
    { name : "B", marks: 45 },
    { name : "C", marks: 90 }
]

const passed = students.filter(student => student.marks >= 50)
// console.log(passed)

// get all numbers greater than 10 
const digits = [5, 12, 8, 20, 3, 15]
const greaterdigits = digits.filter(num => num > 10)
// console.log(greaterdigits)

// get all words starting with a
const fruits = ["apple", "banana", "avocado", "orange", "apricot"]
const afruits = fruits.filter(lettera => lettera.startsWith("a"))
// console.log(afruits)

// get all products less than 500
const cost = [
    {name : "Pen", price: 20},
    {name : "Bag", price: 700},
    {name : "Bottle", price: 250}
]
const lesscost = cost.filter(less => less.price < 500)
// console.log(lesscost)

// get all odd numbers
const odd = [11, 22, 33, 44, 55, 66]
const oddnum = odd.filter(num => num % 2 === 1)
console.log(oddnum)