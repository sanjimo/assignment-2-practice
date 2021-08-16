function add(num1, num2) {
    var result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    var result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    var result = num1 / num2;
    return result;
}

var num1 = 25;
var num2 = 5;

var result = add(num1, num2);
console.log('Result of addition : ', result);

var result = subtract(num1, num2);
console.log('Result of subtraction : ', result);

var result = multiply(num1, num2);
console.log('Result of multiplication : ', result);

var result = divide(num1, num2);
console.log('Result of division : ', result);