let num = 5;

for (let x = 0; x < num; x++) {
  let newal = "";
  for (let y = 0; y < num - x; y++) {
    newal += "*";
  }
  console.log(newal);
}
