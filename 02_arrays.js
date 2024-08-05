const marvel_Heroes = ["Thor", "Hulk", "Black Panther"];
const dc_Heroes = ["Flash", "Batman", "Superman"];

const all_Heroes = marvel_Heroes.concat(dc_Heroes);
console.log(all_Heroes);

const all_Hero = [...marvel_Heroes, ...dc_Heroes];
console.log(all_Hero);

const arr01 = [12, 15, 20, [26, 5, 63, [45, 89], [65, 10, 20]], [40, 50, 60]];
const arr02 = arr01.flat(Infinity);
console.log(arr02);

console.log(Array.isArray("Harshil"));
console.log(Array.from("HarshilDhaduk"));

let s1 = 100;
let s2 = 200;
let s3 = 300;
console.log(Array.of(s1, s2, s3));
