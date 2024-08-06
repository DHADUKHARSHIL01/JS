const instauser = {};

instauser.id = "user123";
instauser.name = "user";
instauser.isloggedin = false;

console.log(instauser);

console.log(Object.keys(instauser));
console.log(Object.values(instauser));
console.log(Object.entries(instauser));

console.log(instauser.hasOwnProperty(`name`)); //if value store in instauser == true else ==false

const userdetails = {
  userEmail: "user01@email",
  fullname: {
    userfullname: {
      firstname: "Harshil",
      lastname: "Dhaduk",
    },
  },
};

console.log(userdetails.fullname);
console.log(userdetails.fullname.userfullname);
console.log(userdetails.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

course = {
  courseid: "test@gmail.com",
  duration: "3 Months",
  price: "999",
};

const { courseid: js } = course;

console.log(js);
