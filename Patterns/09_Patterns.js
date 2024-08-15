const num = 5;

for (let x = 0; x < num - 1; x++) {
  let newal = "";
  for (let y = 0; y <= x; y++) {
    newal += " ";
  }
  for (let z = 0; z < num - x; z++) {
    newal += "* ";
  }
  console.log(newal);
}
for (let x = 0; x < num; x++) {
  let newal = "";
  for (let y = 0; y < num - x; y++) {
    newal += " ";
  }
  for (let z = 0; z <= x; z++) {
    newal += "* ";
  }
  console.log(newal);
}
