export default class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}

export default class Car extends Vehicle {
  constructor(name) {
    super(name, "CAAR");
  }

  getName() {
    return "The car's name is: ";
  }
}
