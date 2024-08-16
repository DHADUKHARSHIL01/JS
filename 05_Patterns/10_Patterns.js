let num = 10;

for (let i = 0; i < num; i++) {
  let newL = "";

  if (i == 0) {
    for (let j = 0; j < num; j++) {
      newL += "* ";
    }
  } else if (i !== 0 && i !== num) {
    for (let k = 0; k < 1; k++) {
      newL += "* ";
    }
    for (let l = 0; l < num - 2; l++) {
      newL += "  ";
    }
    for (let m = 0; m < 1; m++) {
      newL += "* ";
    }
  }

  console.log(newL);
}

for (let i = 0; i < 1; i++) {
  let newL1 = "";
  for (let n = 0; n < num; n++) {
    newL1 += "* ";
  }
  console.log(newL1);
}
