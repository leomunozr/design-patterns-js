const PixelDisplayBehavior = {
  display: () => {
    console.log('Displaying in a screen.');
  }
};

const WildDisplayBehavior = {
  display: () => {
    console.log('Displaying in the wild.');
  }
};

const PlasticDisplayBehavior = {
  display: () => {
    console.log('Displaying in plastic.');
  }
};

module.exports = {
  PixelDisplayBehavior,
  WildDisplayBehavior,
  PlasticDisplayBehavior
};
