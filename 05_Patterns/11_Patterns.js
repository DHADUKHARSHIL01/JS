let num = 7;

for (let i = 0; i <= num; i++) {
  let newL = "";

  for (let j = 0; j < num - i + 1; j++) {
    newL += " ";
  }

  if (i !== 0 && i !== num) {
    for (let k = 0; k < 1; k++) {
      newL += "* ";
    }
  }
  if (i !== num) {
    for (let l = 1; l < i; l++) {
      newL += "  ";
    }
  }
  for (let m = 0; m < 1; m++) {
    newL += "* ";
  }
  if (i == num)
    for (let n = 0; n < num; n++) {
      newL += "* ";
    }
  console.log(newL);
}
