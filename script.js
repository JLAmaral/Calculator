const numButton = document.querySelectorAll('.number');
const clearButton = docuent.querySelector('.clear');



// calculator will contain functions for all the basic math operators. start with:
function add(num1, num2) {
    return num1 + num2;
};

function sub(num1, num2) {
    return num1 - num2;
};

function mult(num1, num2) {
    return num1 * num2;
};

function div(num1, num2) {
    return num1 / num2;
};

// Create 'operate' function that takes an operator and two numbers and then calls one of the above functions on the numbers.

function operate(num1, num2, operator) {
    switch (operator){
        case '+':
            return add(num1, num2);
        case '-':
            return sub(num1, num2);
        case '*':
            return mult(num1, num2) 
        case '/': 
            return div(num1, num2);
    }
};

//Create a basic HTML calculator with buttons for each digit and operator (including =).










// make calculator buttons, create buttons with javascript instead of tons of divs if possible