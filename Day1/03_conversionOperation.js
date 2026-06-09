//for string
let name = 123

//two ways to use typeof
console.log(typeof name);
console.log(typeof (name));

let valueInString = String(name)
console.log(typeof valueInString);
console.log(valueInString);

/* 123 => Number
null => Null 
ubdefined => undefined
true => true
123A => A
123 => 123
*/

// for number
let score = undefined

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//  "33" => 33
//  "3abc" => NaN
//  true => 1; false => 0 
//  null => 0
// undefined => NaN

let isLoggedIn = true 

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Ayushi" => true