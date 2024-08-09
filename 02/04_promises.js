//************** promises  **************
const getPromise = (dataId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Success");
    }, 3000);
  });
};

//************** promises chain  **************

getPromise(1)
  .then((res) => {
    return getPromise(2);
  })
  .then((res) => {
    console.log(rec);
  });

let promise = getPromise();
promise.then((res) => {
  console.log("promise fulfilled");
});

promise.catch((err) => {
  console.log("rejected");
});
