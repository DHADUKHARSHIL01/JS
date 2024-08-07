var num1 = 50; // Global Scope

if (true) {
  let num2 = 40;
  const num3 = 30;
  var num1 = 20;
} //Block Scope

//console.log(num3);
//console.log(num2);
console.log(num1);

function first() {
  const name = "Harshil Dhaduk";

  function sce() {
    const id = "admin01@email.com";
    const web = "W3school";
    console.log(name);
  }
  //   console.log(web);

  sce();
}
first();

if (true) {
  const user = "harshil";
  if (user === "harshil") {
    const webname = "HRD";
    console.log("Hello, " + user + " your website is www." + webname + ".com");
  }
  //console.log(webname);
}
// console.log(user);

function Addnum(num) {
  return num + 1;
}

let Add = Addnum(6);

console.log(Add);

const Addnum1 = function (num) {
  return num + 2;
};
console.log(Addnum1(65));
