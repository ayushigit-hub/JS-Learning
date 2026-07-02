//  a promise is an object that promises to rerturn a value later

// promise has three states
// pending, fulfilled and rejected
// pending : the task id still running
// fulfilled: the task completed successfully
//  rejected: the task failed

// creating a promise
// they are created using the promise constructior

// const promise = new Promise((resolve, reject) => {

// })

//  OR

// const promise = new Promise(function(resolve, reject){

// })

// resolve and reject
//  js automatically provides two functions inside every Promise

// resolve() used when the task succeeds
// calling resolve changes the promise state from pending to fulfilled

// reject() used when the task fails
// calling reject changes the promise state from pending to rejected

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task completed")
        resolve()
    },1000)

})

// consuming a promise
//  you need to consume the promise using .then() since creating a promise is not enough 

promiseOne.then(function(){
    console.log("Promise consumed")
})

// promise without storing in a variable

const promise = new Promise(function(resolve){
    setTimeout(function(){
        console.log("task completed")
        resolve({
            username: "Ayushi",
            contact: 6767676767
        })
    },1000)
})

// recieving data in .then()
// .then(function(user){
//     console.log(user)
// })

// promise chaining
// multiple .then() methods can be chained
promise
.then(function(user){
    return user.username
})

.then(function(username){
    console.log(username)
})

// error handling
// errors are handled using .catch()

promise
.then(function(user){
    return user.username
})

.then(function(username){
    console.log(username)
})

.catch(function(error){
    console.log(error)
})

// finally() always execute whether promise succeeds or fails finally() still runs
promise
.then(function(user){
    return user.username
})

.then(function(username){
    console.log(username)
})

.catch(function(error){
    console.log(error)
})

.finally(function(){
    console.log("promise finished")

})