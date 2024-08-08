const cours = {
  cpp: "c++",
  js: "javascript",
  aws: "Amazon Web Services",
  rb: "Ruby",
};

for (const key in cours) {
  console.log(`${key} Use For ${cours[key]}`);
}

const coursName = ["c++", "javascript", "Amazon Web Services", "Ruby"];

for (const key in coursName) {
  console.log(`${coursName[key]}`);
}

// const map = new Map();
// map.set("IN", "INDIA");
// map.set("Fr", "France");
// map.set("USA", "United states of America");
// map.set("UK", "United Kingdom");

// // console.log(map);

// for (const key in map) {
//   console.log(key);
// }
