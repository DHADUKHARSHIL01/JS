// ************* async and await  *************

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve(200);
    }, 3000);
  });
}

async function getWeatherData() {
  await api();
  await api();
}

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Success");
    }, 2000);
  });
}

async function getAllData(params) {
  await getData(1);
  await getData(2);
  await getData(3);
}

// *************  (Immediately Invoked Function Expressions)  *************

// (async function (params) {
//   await getData(1);
//   await getData(2);
//   await getData(3);
// });
