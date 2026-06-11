const student = {
    name: "Ayushi", 
    age: 18,
    course: "BCA"
}

console.log(student.name)//can extract value like this
console.log(student["age"])// can extract value like this

student.age = 19 //can  change value like this
student.city = "Ahmedabad" //can add new property like this
delete student.course //can delete value like this

console.log(student)