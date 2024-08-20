function Animal() {
  if (this.constructor === Animal) {
    throw new Error(`Cannot instantiate abstract class Animal`);
  }

  this.makeSound = function () {
    throw new Error(`Cannot call abstract method makeSound from Animal`);
  };
}

class Dog {
  constructor(name) {
    Animal.call(this);
    this.name = name;

    this.makeSound = function () {
      console.log(`${this.name} barks`);
    };
  }
}

class Cow {
  constructor(name) {
    Animal.call(this);
    this.name = name;

    this.makeSound = function () {
      console.log(`${this.name} `);
    };
  }
}

Dog.prototype = Object.create(Animal.prototype);
let dog = new Dog("jon is");
dog.makeSound();

try {
  let cow = new Cow("cow is");
  cow.makeSound();
} catch (error) {
  console.error(error.message);
}
