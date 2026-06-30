function sum(callback, x, y){
    let result = x + y
    callback(result)
}

function displayCon(result){
    console.log(result)
}

function displayPage(result){
    document.getElementById("myH1").textContent = result
}

sum(displayPage, 1, 3)