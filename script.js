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
      } else {
        return divide(x, y);
      }
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
    if (!y.includes('.')) {
      y = y.replace(/^0/, '');
    }
    if (button.textContent === '.') {
      if (!y) {
        y += '0';
      }
      button.disabled = true;
    }
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
        display(Math.round(x * 10000) / 10000);
      } else {
        x = y;
      }
      y = '';
      document.querySelector('#point').disabled = false;
    }
    operator = button.textContent;
  });
});

document.querySelector('#clear').addEventListener('click', () => {
  x = '';
  y = '';
  operator = '';
  document.querySelector('#point').disabled = false;
  display('0');
});
