const mySym = Symbol["key1"];

const mydetails = {
  "full name": "Harshil Dhaduk",
  [mySym]: "MySym1",
  age: 20,
  location: "surat ",
  email: "harshil01@email.com",
  isloggedin: true,
  lastlogin: ["Monday", "Sunday"],
};

console.log(mydetails["full name"]);
console.log(mydetails.age);
console.log(mydetails[mySym]);

console.log(mydetails);


mydetails.email= "emailchange@mail.com"


mydetails.gretting = function () {
    console.log("Hello Harshil");   
}

console.log(mydetails.gretting());
