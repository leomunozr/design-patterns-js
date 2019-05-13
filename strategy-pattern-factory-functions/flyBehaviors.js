const LowFlyBehavior = {
  fly: () => {
    console.log('Flying low.');
  }
}

const NoFlyBehavior = {
  fly: () => {
    console.log('Can\'t fly.');
  }
}

const JetFlyBehavior = {
  fly: () => {
    console.log('Flying with a jet.');
  }
}

module.exports = {
  LowFlyBehavior,
  NoFlyBehavior,
  JetFlyBehavior,
};
