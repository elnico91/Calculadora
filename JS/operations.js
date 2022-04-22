var operations = ""

function operation(number) {
    if (number == "x") {
        operations += "*"
        if (operations.charAt(0) == "*") {
            operations = "0*"
        }
    } else {
        operations += document.getElementById(number).innerHTML
        if (operations.charAt(0) == "+" || operations.charAt(0) == "-" || operations.charAt(0) == "/" || operations.charAt(0) == ".") {
            operations = "0" + document.getElementById(number).innerHTML
        }
    }

    var count = 0
    for (let i = operations.length - 2; i < operations.length; i++) {
        if (operations.charAt(i) == "+" || operations.charAt(i) == "*" || operations.charAt(i) == "-" || operations.charAt(i) == "/" || operations.charAt(i) == ".") {
            count += 1
            if (count == 2) {
                operations = operations.substring(0, operations.length - 1)
            }
        }
    }
    count = 0
    
    for (let i = 0; i < operations.length; i++) {
        if (operations.charAt(i) == ".") {
            count += 1
            if (count == 2) {
                operations = operations.substring(0, operations.length - 1)
            }
        }
        if (operations.charAt(i) == "+" || operations.charAt(i) == "*" || operations.charAt(i) == "-" || operations.charAt(i) == "/") {
            count = 0
        }
    }
    count = 0

    document.getElementById("operation").innerHTML = operations
}

function deleteNumber() {
    operations = operations.substring(0, operations.length - 1)
    document.getElementById("operation").innerHTML = operations
}

function deleteAll() {
    operations = ""
    document.getElementById("operation").innerHTML = "0"
    document.getElementById("results").innerHTML = ""
}

function operationResult() {
    var result = eval(operations)
    operations = result
    document.getElementById("results").innerHTML = result
}