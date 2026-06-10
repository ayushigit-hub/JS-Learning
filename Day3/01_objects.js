//singleton

// Object literals
const mySym = Symbol("key1")

const name = {
    firstname: "Ayushi",
    "lastname": "Chundawat", // you cant access this value of .
    [mySym]: "mykey1",
    Age: 18,
    isMember: true,
    attendance: ["Thrusday", "Saturday"]
} //object declared

// accessing an object
console.log(name.lastname)
console.log(name["Age"])
console.log(name[mySym])

// if you take . then no need to use the ""

name.isMember = false
// Object.freeze(name)
// name.firstname = "notAyushi"
console.log(name)

name.greeting = function(){
    console.log("hii")
}

name.greeting2 = function(){
    console.log(`Hii, ${this.firstname}`)
}
console.log(name.greeting())
console.log(name.greeting2())