const add = function (a, b) {
  return a + b

};

const subtract = function (a, b) {
  return a - b

};

const sum = function (arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0)
  return sum

};

const multiply = function (arr) {
  const product = arr.reduce((acc, num) => acc * num, 1)
  return product
};

const power = function (a, b) {
  return a ** b

};

const factorial = function (a) {
  if (a === 1 || a === 0) return 1;
  else if (a < 0) return 'ERROR'
  else {
    return a * factorial(a - 1)
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
