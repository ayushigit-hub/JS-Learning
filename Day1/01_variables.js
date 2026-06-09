const accountId = 23456
// you cant change a variable with const keyword 
let accountEmail = "123@gmail.com"
var accountPassword = "12345"
accountCIty = "Jaipur"
// ways to define a constant

accountEmail = "different"
accountPassword = "Differnet"
accountCity = "DIFFERENT"

console.table([accountId, accountEmail, accountPassword, accountCity]);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

let account; 
// const account1; not allowed
var account2;

console.table([account, account1, account2])