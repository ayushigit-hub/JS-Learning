const userProfile = {
    name: "Ayushi",
    age: 18,
    city:"Ahmedabad",
    course: "BCA",
    skills: ["C", "java", "JavaScript"],
    isStudent: true,

    contact: {
        email: "ayushi@email.com",
        phone: 9872345612
    }
}

//accessing variables values
console.log(userProfile.name)

//change value
userProfile.isStudent = false
console.log(userProfile)

//add new property
userProfile.feesPaid = true
console.log(userProfile)

//extracting array values
console.log(userProfile.skills[2])

// extracting nested objects value
console.log(userProfile.contact.email)

//nested object ki value change
userProfile.contact.email = "xyz@email.com"
console.log(userProfile)

// adding values in the array of the object
userProfile.skills.push("C#")
console.log(userProfile)