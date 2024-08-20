function pascalsPyramid(lines) {
  const pyramid = [];
  for (let i = 0; i < lines; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        const prevRow = pyramid[i - 1];
        const sum = prevRow[j - 1] + prevRow[j];
        row.push(sum);
      }
    }
    pyramid.push(row);
  }
  return pyramid;
}

function printPascalsPyramid(lines) {
  const pyramid = pascalsPyramid(lines);
  const maxWidth = pyramid[pyramid.length - 1].join(" ").length;
  pyramid.forEach((row, index) => {
    const spaces = " ".repeat((maxWidth - row.join(" ").length) / 2);
    console.log(spaces + row.join(" "));
  });
}

const lines = 7;
printPascalsPyramid(lines);
