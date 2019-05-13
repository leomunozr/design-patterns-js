class Duck {

  constructor(name, flyBehavior, quackBehavior, displayBehavior) {
    this.name = name;
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
    this.displayBehavior = displayBehavior;
  }

  fly() {
    return this.flyBehavior.fly();
  }

  quack() {
    return this.quackBehavior.quack();
  }

  display() {
    return this.displayBehavior.display();
  }
}

module.exports = Duck;
