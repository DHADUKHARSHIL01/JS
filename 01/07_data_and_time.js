const myDate = new Date();

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

const createdDate = new Date(2024, 6, 27);
console.log(createdDate.toDateString());

const mycreatedDate = new Date("07-27-2024");
console.log(mycreatedDate.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp);

console.log(mycreatedDate.getTime());

let myNewDate = new Date();
console.log(myNewDate.getDate());

console.log(myNewDate.getDay());

console.log(myNewDate.getMonth() + 1);
