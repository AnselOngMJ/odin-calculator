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

window.addEventListener('keydown', (key) => {
  switch (key.key) {
    case 'Backspace':
      document.querySelector('#backspace').click();
      break;
    case 'Delete':
      document.querySelector('#clear').click();
      break;
    default:
      document.querySelectorAll('*').forEach((element) => {
        if (element.textContent === key.key) {
          element.click();
        }
      });
  }
});

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

const point = document.querySelector('#point');

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
      point.disabled = true;
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
      point.disabled = false;
    }
    operator = button.textContent;
  });
});

document.querySelector('#clear').addEventListener('click', () => {
  x = '';
  y = '';
  operator = '';
  point.disabled = false;
  display('0');
});

document.querySelector('#backspace').addEventListener('click', () => {
  if (y) {
    if (y.charAt(y.length - 1) === '.') {
      point.disabled = false;
    }
    y = y.slice(0, y.length - 1);
    display(y);
  }
});
