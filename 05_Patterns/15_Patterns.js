let num = 6;
let k = 0;

for (let i = 0; i < num; i++) {
  let newL = "";
  for (let j = 0; j < i + 1; j++) {
    newL += k + 1 + " ";
    k++;
  }
  console.log(newL);
}
