class parent {
  hello() {
    console.log("Hello");
  }
}

class child extends parent {}

let object = new child();

//*************--- sce ---*************

class person {
  constructor(Name) {
    console.log("enter a parent");
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
    console.log("enter a child");
    super(Name);
    console.log("exit a child");
  }
  work() {
    super.eat();
    console.log("solve problems , Bild something");
  }
}

class Doctor extends person {
  work() {
    console.log("treat patients");
  }
}
console.log(Doctor.work);

let Hobj = new Engineer("Harshil");
console.log(Hobj);
console.log(Hobj.work());
