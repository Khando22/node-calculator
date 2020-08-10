const readlineSync = require("readline-sync");

// Variables
const firstNum = readlineSync.question('Please enter your first number.');

const secondNum = readlineSync.question('Please enter your second number. ');

const operation = readlineSync.question("Please enter the operation to perform: 'add', 'sub', 'mul', 'div' ");

// Functions created to perform arithmetic

function sum(num1, num2) {
    let numOne = parseInt(num1);
    let numTwo = parseInt(num2);
    return numOne + numTwo;
}

function multiply(num1, num2) {
    let numOne = parseInt(num1);
    let numTwo = parseInt(num2);
    return numOne * numTwo;
}

function divide(num1, num2) {
    let numOne = parseInt(num1);
    let numTwo = parseInt(num2);
    return numOne / numTwo;
}

function subtract(num1, num2) {
    let numOne = parseInt(num1);
    let numTwo = parseInt(num2);
    return numOne - numTwo;
}

// logic to determine function to use and return result

switch(operation) {
    case "add":
        let sumAns = sum(firstNum, secondNum);
        console.log("The result is: " + sumAns + " 👍!")
      break;
    case "sub":
        let subtractAns = subtract(firstNum, secondNum);
        console.log("The result is: " + subtractAns + " 👍!")
      break;
    case "mul":
        let multiplyAns = multiply(firstNum, secondNum);
        console.log("The result is: " + multiplyAns + " 👍!")
      break;
    case "div":
        let divideAns = divide(firstNum, secondNum);
        console.log("The result is: " + divideAns + " 👍!")
      break;
    default:
        console.log('Sorry, I broke and there has been an error.')
      break;
    
}