// callback = a function that is passed as an arguement
//                to another function

function hello(callback){
    console.log("hello")
    callback()
}

function goodbye(){
    console.log("goodbye")
}
function wait(){
    console.log("wait")
}
function leave(){
    console.log("leave")
}

hello(wait)