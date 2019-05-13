class LowFlyBehavior {
  fly() {
    console.log('Flying low.');
  }
}

class NoFlyBehavior {
  fly() {
    console.log('Can\'t fly.');
  }
}

class JetFlyBehavior {
  fly() {
    console.log('Flying with a jet.');
  }
}

module.exports = {
  LowFlyBehavior,
  NoFlyBehavior,
  JetFlyBehavior,
};
