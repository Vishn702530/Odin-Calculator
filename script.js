function displayNum(num) {
    inp.value += num;
}


function deleteLast() {
    inp.value = inp.value.slice(0, -1)
}

function clearInp() {
    inp.value = ""
}


function getAns() {
    let op = document.getElementById("inp").value;

    if (op.includes("+")) {
        var result = [];
        result = op.split("+");

        add.apply(null, result);

    }
    if (op.includes("-")) {
        let answer = subtract(op)
        document.getElementById('inp').value = parseInt(answer);
    }
    if (op.includes("/")) {
        let answer = divide(op)
        document.getElementById('inp').value = parseInt(answer);
    }
    if (op.includes("*")) {
        let answer = multiply(op)
        document.getElementById('inp').value = parseInt(answer);
    }

}
function add(operator1, operator2) {
    document.getElementById('inp').value = parseFloat(operator1) + parseFloat(operator2);
}
function subtract(number) {
    var result = [];
    result = number.split('-');
    return parseFloat(result[0]) - parseFloat(result[1]);

}
function multiply(number) {
    var result = [];
    result = number.split('*');
    return parseFloat(result[0]) * parseFloat(result[1]);
}
function divide(number) {
    var result = [];
    result = number.split('/');
    return parseFloat(result[0]) / parseFloat(result[1]);
}

