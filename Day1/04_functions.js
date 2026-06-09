function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result: ", result);

function gameFinished(gamer = "ayushiproplayer"){
    if(!gamer){
        console.log("Please enter the username");
        return 
        
    }
    
    return `${gamer} finished the game`
}

// console.log(gameFinished("ayushiproplayer"))
//  what if no value is passed
// "" => finished the game
//  kept empty => undefined finished the game

console.log(gameFinished("ayushiisnotproplayer"))