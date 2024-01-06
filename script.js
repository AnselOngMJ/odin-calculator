function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

let x = '';
let y = '';
let operator = '';

function operate(operator, x, y) {
  switch (operator) {
    case '+':
      return add(x, y);
    case '-':
      return subtract(x, y);
    case '*':
      return multiply(x, y);
    case '/':
      if (!y) {
        return 'Undefined';
      }
      return divide(x, y);
    default:
      return 'Invalid Operator';
  }
}

function display(number) {
  document.querySelector('#display').textContent = number;
}

const digits = document.querySelectorAll('.digits');
digits.forEach(button => {
  button.addEventListener('click', () => {
    if (operator === '=') {
      x = '';
    }
    y = y.replace(/^0/, '');
    y += button.textContent;
    display(y);
  });
});

const operators = document.querySelectorAll('.operators');
operators.forEach(button => {
  button.addEventListener('click', () => {
    if (y) {
      if (x && operator) {
        x = operate(operator, parseFloat(x), parseFloat(y));
        display(Math.round(x * 100) / 100);
      } else {
        x = y;
      }
      y = '';
    }
    operator = button.textContent;
  });
});

document.querySelector('#clear').addEventListener('click', () => {
  x = '';
  y = '';
  operator = '';
  display('0');
});
