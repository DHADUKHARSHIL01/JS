const myarr = [10, 15, 55, 63, 89];

for (const number of myarr) {
  console.log(number);
}
const Name = "Harshil Dhaduk";

for (const string of Name) {
  console.log(string);
}

//****** maps ******

const map = new Map();
map.set("IN", "INDIA");
map.set("Fr", "France");
map.set("USA", "United states of America");
map.set("UK", "United Kingdom");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// const game = {
//   name1: "Harshil",
//   name2: "Meet",
// };

// for (const [key, value] of obgamej1) {
//   console.log(key, ":-", value);
// }
