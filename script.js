

function insertNumber(num) {
    let number = document.getElementById('numberResult').innerHTML
    document.getElementById('numberResult').innerHTML = number + num
}

function clearr() {
    document.getElementById('numberResult').innerHTML = "";
}

function backNumber() {
    var result = document.getElementById('numberResult').innerHTML
    document.getElementById("numberResult").innerHTML = result.substring(0, result.length - 1)
}

function calculator() {
    var result = document.getElementById('numberResult').innerHTML
    if(result) {
        document.getElementById('numberResult').innerHTML = eval(result)
    } else {
        document.getElementById('numberResult').innerHTML = "Error"
    }
}