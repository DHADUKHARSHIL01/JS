//*********** Asynchronous   ***********

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

setTimeout(() => {
  console.log("Hello");
}, 1000);

console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");

//*********** Asynchronous Callbacks  ***********

const hello = () => {
  console.log("hello");
};

setTimeout(hello, 1000);

//*********** Synchronous Callbacks  ***********

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCall) {
  sumCall(a, b);
}

calculator(18, 36, sum);

//**************  **************

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

//Callback hell

getData(1, () => {
  console.log("getting data 2");

  getData(2, () => {
    console.log("getting data 3");

    getData(3, () => {
      console.log("getting data 4");

      getData(4);
    });
  });
});

//************** Promises  **************

const promise = new Promise((resolve, reject) => {
  console.log("Iam a Promises");
  reject("some error");
});
