const numbers = [1, 2, 3, 4]
const doubled = numbers.map(num => num * 2)
// console.log(doubled)

// convert names to uppercase
 const names = ["Ayushi", "vishu", "abhi"]
const uppernames = names.map(name => name.toUpperCase())
// console.log(uppernames)

//  get lengths of words
const words = ["apple", "banana", "orange"]
const lengths = words.map(word => word.length)
// console.log(lengths)

//  add "hello" before every name
const newnames = ["Ayushi", "vishu", "abhi"]
const greetings = newnames.map(name =>`Hello ${name}`)
// console.log(greetings)

//  extract property from objects
const users = [
    { name: "Ayushi", age: 18},
    { name: "Vishu", age: 22}
]

const userNames = users.map(user => user.age)
// console.log(userNames)

//  convert [1, 2, 3, 4, 5] into [1, 4, 9, 16, 25]
const firstdigits = [1, 2, 3, 4, 5]
const converteddigits = firstdigits.map(num => num*num)
// console.log(converteddigits)

// convert [cat, dog, bird] into [CAT, DOG, BIRD]
const animals = ["cat", "dog", "bird"]
const upperAnimals = animals.map(animal => animal.toUpperCase())
// console.log(upperAnimals)

// convert ayushi, vishu into ayushi! vishu!
const sibling = ["Ayushi", "Vishu"]
const happySibling = sibling.map(siblings => ` ${siblings}!`)
// console.log(happySibling)

const employee = [
    {name: "Ayushi", salary: 25000},
    {name: "Vishu", salary: 30000}
]
const salary = employee.map(salaries => salaries.salary)
console.log(salary)
