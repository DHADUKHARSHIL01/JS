class Car {
  constructor(brand, mileage) {
    console.log("creating a new object");
    this.brand = brand;
    this.mileage = mileage;
  }

  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

  work() {
    console.log("do nothing");
  }
}

let bmw = new Car("BMW", 30);
console.log(bmw);

let volvo = new Car("volvo", 20);
console.log(volvo);

//************ Inheritance in JS ************

class parent {
  hello() {
    console.log("Hello");
  }
}

class child extends parent {}

let object = new child();

//****** sce ******

class person {
  constructor(Name) {
    // console.log("enter a parent");
    this.Species = "homo sapiens";
    this.Name = Name;
  }
  eat() {
    console.log("Eat");
  }
  seep() {
    console.log("Seep ");
  }
}

class Engineer extends person {
  constructor(Name) {
    // console.log("enter a child");
    super(Name);
    // this.branch = branch;
    // console.log("exit a child");
  }
  work() {
    super.eat();
    console.log("solve problems , Bild something");
  }
}

// class Doctor extends person {
//   work() {
//     console.log("treat patients");
//   }
// }

let Hobj = new Engineer("Harshil");
