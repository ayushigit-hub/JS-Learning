//  Student Marks Calculator
function calculateMarks(math, science, callback){
    let total = math + science
    callback(total)
}

function displayMarks(total){
    console.log("Total Marks:", total)
}

calculateMarks(85, 90, displayMarks)

// Pizza Bill
function pizzaBill(price, gst, callback){
    let total = price + gst
    callback(total)
}

function printBill(total){
    console.log("Totoal Bill: $" + total)
}

pizzaBill(5, 1.50, printBill)

// Salary Calculator
function calculateSalary(hours, rate, callback){
    let salary = hours * rate
    callback(salary)
}

function displaySalary(salary){
    console.log("Salary:", salary)
}

calculateSalary(40, 550, displaySalary)

// Temperature Converter
function convertTemperature(celsius, callback){
    let fahrenheit = (celsius * 9 / 5) + 32
    callback(fahrenheit)
}

function displayTemperature(result){
    console.log(result + "in Farenheit")
}

convertTemperature(48, displayTemperature)

// Greeting System
function greetUser(name, callback){
    callback(name)
}

function sayHello(name){
    console.log("Welcome, " + name)
}

greetUser("Ayushi", sayHello)

//  Username Formatter
function formatUsername(username, callback){
    let result = username.toUpperCase()
    callback(result)
}

function displayUsername(result){
    console.log(result)
}

formatUsername("ayushi", displayUsername)

// book counter
function countBooks(books, callback){
    let total = books.length
    callback(total)
}

function displayCount(total){
    console.log("books are", total)
}

countBooks(["JS", "HTML", "CSS"], displayCount)

// Age Checker
function checkAge(age, callback){
    let result = age >= 18
    callback(result)
}

function display(result){
    console.log(result)
}

checkAge(20, display)

// Shopping Cart Summary
function  shoppingCart(chiz1, chiz2, callback){
    let total = chiz1 + chiz2
    let discount = total * 0.10

    callback(total, discount)
}

function receipttohdo(total, discount){
    console.log("total iska hua", total)
    console.log("discount ispe mila tumko", discount)
}

shoppingCart(500, 700, receipttohdo)

//  exam ka result
function checkkrResult(numbertumare, callback){
    let yehResult = numbertumare >= 40 ? "Pass" : "Fail" //40 se zyada ya equal to pass varna bhai hogya tera
    callback(yehResult)
}

function dikhaoBhaiIsko(yehResult){
    console.log(yehResult)
}

checkkrResult(67, dikhaoBhaiIsko) // get the reference?

// password strength checker (bhai yeh toh sahi se rkh le)
function passwordkiStrength(password, callback){
    let takatdikha = password.length >= 8
    callback(takatdikha)
}

function dekhteh(result){
    console.log(result)
}

passwordkiStrength("yehkyahbhaimere", dekhteh)

// movie ticket booking ohoooo
function kharidle(name, callback){
    console.log("book ho rhi h")
    callback(name)
}

function pkkalenih(name){
    console.log("le kr di book " + name)
}

// kharidle("Ayushi", pkkalenih)
kharidle("ticket", pkkalenih)

// ayushi book nhi hui h isme 