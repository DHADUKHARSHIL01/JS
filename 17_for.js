for (let a = 0; a <= 20; a++) {
  const element = a;
  if (element === 10) {
    console.log("You are on 7th Stair.");
  }
  //console.log(element);
}

for (let x = 1; x <= 10; x++) {
  console.log(`Tabel of : ${x}`);
  for (let y = 1; y <= 10; y++) {
    console.log(`${x}* ${y} = ${x * y}`);
  }
}

let arr = ["Ironman", "Thor", "Hulk"];
console.log(arr.length);

for (let hero = 0; hero < arr.length; hero++) {
  const element = arr[hero];
  console.log(element);
}

for (let a = 0; a <= 10; a++) {
  if (a === 5) {
    console.log("Your last number is 5");
    break;
  }
  console.log(`value of a is ${a}`);
}

for (let a = 0; a <= 20; a++) {
  if (a === 10) {
    console.log("skip 10");
    continue;
  }
  console.log(`value of a is ${a}`);
}
