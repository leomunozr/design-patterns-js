class PixelDisplayBehavior {
  display() {
    console.log('Displaying in a screen.');
  }
}

class WildDisplayBehavior {
  display() {
    console.log('Displaying in the wild.');
  }
}

class PlasticDisplayBehavior {
  display() {
    console.log('Displaying in plastic.');
  }
}

module.exports = {
  PixelDisplayBehavior,
  WildDisplayBehavior,
  PlasticDisplayBehavior
};
