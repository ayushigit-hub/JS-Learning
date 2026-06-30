//  pass a function as an arguement

function greet(name){
    console.log(`Hello ${name}`)
}

function processUser(callback){
    callback("Ayushi")
}

processUser(greet)

// calculator with callbacks

function calculate(a, b, calculate){
    calculate(a, b)
}

function add(a, b){
    console.log(a + b)
}

function multiply(a, b){
    console.log(a * b)
}

calculate(5, 3, add)
calculate(5, 3, multiply)

// return the result to different callbacks

function sum(callback, a, b){
    let result = a + b
    callback(result)
}

function showConsole(result){
    console.log(result)
}

function showSquare(result){
    console.log(result * result)
}

sum(showConsole, 2, 3)
sum(showSquare, 2, 3)

// browser callbacks
/*function udpatePage(text){
    document.getElementById("title").textContent = text
}

function changeTitle(){
    udpatePage("Callbacks are the thing")
}*/

// event callbacks

/*const button = document.querySelector("button")
button.addEventListener("click", function(){
    console.log("button clicked")
})*/

// timers
function sayHi(){
    console.log("hi")
}

setTimeout(sayHi, 2000)

// array methods 
const numbers = [1, 2, 3, 4]

numbers.forEach(function(number){
    console.log(number)
})

// forEach() goes through each item in an array and performs an action on it

// syntax for forEach
//  array.forEach(callback)
// OR
// array.forEach(function(item){
//  code to run for each item
// })