num = 5;

for (let i = 0; i <= num; i++) {
  let newL = "";
  for (let j = 0; j < num - i; j++) {
    newL += " ";
  }
  for (let k = 0; k < 1; k++) {
    newL += "*";
  }
  for (let l = 0; l < i; l++) {
    newL += "  ";
  }
  if (i !== 0) {
    for (let m = 0; m < 1; m++) {
      newL += "*";
    }
  }
  console.log(newL);
}
for (let i = 0; i <= num - 1; i++) {
  let newL1 = "";
  for (let n = 0; n < i; n++) {
    newL1 += " ";
  }
  for (let o = 0; o < 1; o++) {
    newL1 += " *";
  }
  for (let p = 0; p < num - i - 1; p++) {
    newL1 += "  ";
  }
  if (i !== num - 1) {
    for (let q = 0; q < 1; q++) {
      newL1 += "*";
    }
  }
  console.log(newL1);
}
