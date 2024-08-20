const totalNum = [1, 2, 3];

const newTotal = totalNum.reduce((acc, carrval) => acc + carrval, 0);

console.log(newTotal);

const shoppingCart = [
  {
    course: "js Course",
    price: 1999,
  },
  {
    course: "py Course",
    price: 999,
  },
  {
    course: "mobile dev Course",
    price: 2999,
  },
  {
    course: "data science Course",
    price: 6999,
  },
  {
    course: "Full stack Course",
    price: 12999,
  },
];

const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`your Amount ${cartTotal} $`);
