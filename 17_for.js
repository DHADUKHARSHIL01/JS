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
