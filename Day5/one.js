// idhr saare elements select 
const heading = document.getElementById("heading")
const username = document.getElementById("username")
const status = document.getElementById("status")
const info = document.getElementById("info")

// likha hua change kr rhe h 
heading.textContent = "Welcome to JavaScript DOM Dashboard"
username.textContent = "Ayushi"
status.textContent = "Online"

// idhr html content change kr rhe h
info.innerHTML = `
<h3> User Information </h3>
<ul> 
     <li> Name: Ayushi </li>
     <li> Course: BCA </li>
     <li> Status: Active </li>
</ul>`;

// changing css styles

document.body.style.backgroundColor = "black"
document.body.style.color = "white"

heading.style.color = "yellow"
heading.style.fontSize = "40px"

status.style.color = "lightgreen"


