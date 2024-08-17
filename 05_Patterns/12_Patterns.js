let num = 5;

for (let i = 0; i < num + 1; i++) {
  let newL = " ";
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
      newL += "* ";
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
