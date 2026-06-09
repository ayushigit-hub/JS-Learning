const user = {
    username: "ayushi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to the website`);
        console.log(this);
    }
}
// this current context ko refer krta h 

// user.welcomeMessage()
// user.username = "sanki"
// user.welcomeMessage()

// console.log(this);

// function yo(){
//     let username = "Ayushi"
//     console.log(this.username);
// }

// yo()
// this is only working in object and not the function 

// const yo = () => {
//  let username = "Ayushi"
   // console.log(this.username); still undefined
    // console.log(this); gives empty parenthesis
// }

// yo()

// () => {}  basic syntax
// can be hold under a variable like
//  const yo = (prm1, prm2) => {
//     return prm1 + prm2 
// }

// console.log(yo(1, 2))

// implicit return
// const yo = (prm1, prm2) => prm1 + prm2
// console.log(yo(2,3))

// const yo = (prm1, prm2) => (prm1 + prm2)
// console.log(yo(4,5))

// will run as it is



