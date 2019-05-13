class NormalQuackBehavior {
  quack() {
    console.log('Quacking normal.');
  }
}

class LoudQuackBehavior {
  quack() {
    console.log('Quacking loud.');
  }
}

class NoQuackBehavior {
  quack() {
    console.log('Can\'t quack.');
  }
}

module.exports = {
  NormalQuackBehavior,
  LoudQuackBehavior,
  NoQuackBehavior
};
