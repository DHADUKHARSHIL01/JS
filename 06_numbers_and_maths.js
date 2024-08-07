const number = 235;
console.log(number);

const Num1 = new Number(444);
console.log(Num1);

console.log(Num1.toString().length);
console.log(Num1.toFixed(3));

// ************* Maths *************

console.log(Math);

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const Min = 1;
const Max = 6;

console.log(Math.floor(Math.random() * (Max - Min + 1)) + Min);
