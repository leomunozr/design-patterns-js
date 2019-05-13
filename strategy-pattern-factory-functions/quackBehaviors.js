const NormalQuackBehavior = {
  quack: () => {
    console.log('Quacking normal.');
  }
};

const LoudQuackBehavior = {
  quack: () => {
    console.log('Quacking loud.');
  }
};

const NoQuackBehavior = {
  quack: () => {
    console.log('Can\'t quack.');
  }
};

module.exports = {
  NormalQuackBehavior,
  LoudQuackBehavior,
  NoQuackBehavior
};
