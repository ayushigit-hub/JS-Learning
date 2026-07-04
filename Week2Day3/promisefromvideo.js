// this here we created the promise

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
    }, 1000)
})
//  if we didnt use resolve the promise wont me consumed to check we used then, then will only execute after the promise is resolved

//  here we are consuming the promise
promiseOne.then(function(){
    console.log("promise consumed")
})

//  it is not mandatory to store the promise in the variable, you can also create promise like this
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
})

.then(function(){
    console.log("Async 2 resolved")
})

// 

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ayushi", 
            email:"ayushi@example.com"})
    }, 1000)
})
// idhr humne resolve mai data pass toh krdiya pr lenge kaise?
// function apne connect krdiya toh resolve aur then ka connection h toh you can expect kr skte ho by default ki kuch data aayega ab voh pura object ab uss object ko man lete h hum user

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Ayushi",
                password: "123"})
        }else {
            reject("error something went wrong")
        }
    }, 1000)
})

// pura object print krane ki jagah agr ek element we want to print toh hum .then() ki chaining krenge
// finally will always execute

promiseFour
.then(function(user){
    console.log(user)
    return user.username
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("the promise is either resolved or rejected")
})

 const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password:"123"})
        } else {
            reject("error: js went wrong")
        }
    }, 1000)
 })

async function consumePromiseFive(){
    try {
        const reponse = await promiseFive
        console.log(response)
    } catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//     const response2 = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response2.json()
//     console.log(data)
//     } catch(error){
//         console.log("e:", error)
//     }
// }
// getAllUsers()

// isko hi then catch se krke dekhte h 

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
})

.catch(function(error){
    console.log(error)
})