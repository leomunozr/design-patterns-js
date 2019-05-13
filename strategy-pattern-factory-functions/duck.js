const Duck = (name, flyBehavior, quackBehavior, displayBehavior) => {
  return {
    name,
    fly: () => flyBehavior.fly(),
    quack: () => quackBehavior.quack(),
    display: () => displayBehavior.display()
  }
};

module.exports = Duck;
