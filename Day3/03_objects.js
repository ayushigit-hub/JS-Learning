// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// const {courseInstructor} = course
// console.log(courseInstructor)

const studentEnrolled = {
    name: "Student1",
     course: {
      coursename: "js in hindi",
      price: "999",
      courseInstructor: "hitesh"  
    },
    address: "shrinagar"
}

// const {course} = studentEnrolled
// console.log(course)

const {name: Name1} = studentEnrolled //name changed 
console.log(Name1)

// const {course: {price: cost}} = studentEnrolled
// console.log(cost)

studentEnrolled.course.price = "997"
console.log(studentEnrolled)
