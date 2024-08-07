const arrow = () => {
  let UserName = "harshil";
  console.log(this.UserName);
};
arrow();

const sumTwoNum = (n1, n2) => {
  return n1 + n2;
};

console.log(sumTwoNum(20, 35));

const newNum = (n1, n2, n3) => (n1, n2, n3);

console.log(newNum(46, 86, 65));
