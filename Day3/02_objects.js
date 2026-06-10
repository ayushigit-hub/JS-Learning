// const appUser = new Object()
const appUser = {}

appUser.id= "1"
appUser.name = "Ayushi"
appUser.isLoggedIn = false

// console.log(appUser)

const anotherUser = {
    email: "xyz@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Ayushi",
            lastname: "Chundawat"
        }
    }
}

// console.log(anotherUser.fullname?.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)\

const obj3 = {...obj1, ...obj2}
console.log(obj3)

 