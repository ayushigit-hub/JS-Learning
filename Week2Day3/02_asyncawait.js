// async joh hota h voh use hota h before a function and voh function ko asynchronous bna deta h, async function hmesha promise return krta h  
// syntax

// async function functionName(){

// }


async function greet() {
    return "Hello"
}

console.log(greet())

//  ab await kya h ?
// await pauses the execution of an async function until promise resolve ya reject nhi hojata
// await can only be used inside the async function
// syntax
// const result = await promise

// using await with a promise

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false

        if(!error){
            resolve({
                username: "javascript",
                password: "123"
            })
        } else {
            reject("error: js went wrong")
        }
    }, 1000)
})

// consuming the promise
async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response)
}

consumePromiseFive()