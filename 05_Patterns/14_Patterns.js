let num = 5;

for (let i = 0; i < num + 1; i++) {
  let newL = "";
  if (i == 0) {
    for (let j = 0; j < num + 1; j++) {
      newL += "* ";
    }
  }
  if (i !== 0 && i !== num) {
    for (let k = 0; k < i; k++) {
      newL += " ";
    }
    for (let l = 0; l < 1; l++) {
      newL += "* ";
    }
    for (let m = 0; m < num - i; m++) {
      newL += "  ";
    }
  }
  if (i !== num) {
    for (let n = 0; n < 1; n++) {
      newL += "*";
    }
  }
  if (i == num) {
    for (let o = 0; o < num; o++) {
      newL += " ";
    }
    for (let p = 0; p < 1; p++) {
      newL += " *";
    }
  }
  console.log(newL);
}
for (let a = 0; a < num + 1; a++) {
  let newL1 = "";
  for (let b = 0; b < num - a; b++) {
    newL1 += " ";
  }
  for (let c = 0; c < 1; c++) {
    newL1 += "*";
  }
  if (num !== a) {
    for (let m = 0; m < a; m++) {
      newL1 += "  ";
    }
  }
  if (a !== num) {
    for (let n = 0; n < 1; n++) {
      newL1 += " *";
    }
  }
  if (a == num) {
    for (let s = 0; s < num + 1; s++) {
      newL1 += " *";
    }
  }
  console.log(newL1);
}
