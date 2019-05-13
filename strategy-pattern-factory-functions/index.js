const Duck = require('./duck');
const {
  NoFlyBehavior,
  LowFlyBehavior,
  JetFlyBehavior
} = require('./flyBehaviors');
const {
  NormalQuackBehavior,
  LoudQuackBehavior,
  NoQuackBehavior
} = require('./quackBehaviors');
const {
  PixelDisplayBehavior,
  WildDisplayBehavior,
  PlasticDisplayBehavior
} = require('./displayBehaviors');

const rubberDuck = Duck('Rubber duck', NoFlyBehavior, NoQuackBehavior, PlasticDisplayBehavior);
const wildDuck = Duck('Wild duck', LowFlyBehavior, NormalQuackBehavior, WildDisplayBehavior);
const gameDuck = Duck('Game duck', JetFlyBehavior, LoudQuackBehavior, PixelDisplayBehavior);

[rubberDuck, wildDuck, gameDuck].forEach(duck => {
  console.log(duck.name);
  duck.display();
  duck.quack();
  duck.fly();
  console.log();
});