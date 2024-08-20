function Person(name, age, Surname) {
  let privateAge = age;
  this.name = name;
  this.Surname = Surname;

  this.getAge = function () {
    return privateAge;
  };
}

let person = new Person("HARSHIL", "DHADUK", 20);
console.log(person.name);
// console.log(person.privateAge);
console.log(Person.Surname);
console.log(person.getAge());
