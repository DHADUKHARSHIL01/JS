function MyName() {
  console.log("H");
  console.log("a");
  console.log("r");
  console.log("s");
  console.log("h");
  console.log("i");
  console.log("l");
}

MyName();

function sumOfTwoNumber(number1, number2) {
  return number1 + number2;
}

result = sumOfTwoNumber(15, 96);
console.log(result);

function loginMessage(username) {
  if (username === undefined) {
    console.log("please Enter a Username");
    return;
  }
  return `${username} just logged in`;
}

let message = loginMessage("Harshil");
console.log(message);

function calculatprice(...price) {
  return price;
}

console.log(calculatprice(150, 235, 268, 189));
