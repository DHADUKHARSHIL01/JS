const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = number
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 50);

console.log(newNumber);

const Number3 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Number1 = Number3.map((num1) => num1 * 10)
  .map((num1) => num1 + 1)
  .filter((num1) => num1 > 100);

console.log(Number1);
