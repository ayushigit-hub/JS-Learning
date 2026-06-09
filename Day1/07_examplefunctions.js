// Sum of two numbers
function add(a,b){
   return a + b
}

console.log(add(5,3));

// Check Even or Odd
function isEven(num){
    return num % 2 == 0;
}

console.log(isEven(2));

// Calculate Square
function square(num1){
    return num1 * num1;
}

console.log(square(6));

//Greet my Banda
function greet(name){
    return `HElLO!! ${name}`;
}

console.log(greet("abhiiii"));


//Check for prime number
function isPrime(num) {
    if(num < 2) return false;

    for(let i = 2; i<num; i++){
        if (num % i == 0){
            return false;
        }
    }

    return true;
}

console.log(isPrime(13));