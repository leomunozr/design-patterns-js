const Duck = require('./duck');
const {
  NoFlyBehavior,
  LowFlyBehavior,
  JetFlyBehavior
} = require('./flyBehavior');
const {
  NormalQuackBehavior,
  LoudQuackBehavior,
  NoQuackBehavior
} = require('./quackBehavior');
const {
  PixelDisplayBehavior,
  WildDisplayBehavior,
  PlasticDisplayBehavior
} = require('./displayBehavior');


const rubberDuck = new Duck('Rubber duck', new NoFlyBehavior(), new NoQuackBehavior(), new PlasticDisplayBehavior());
const wildDuck = new Duck('Wild duck', new LowFlyBehavior(), new NormalQuackBehavior(), new WildDisplayBehavior());
const gameDuck = new Duck('Game duck', new JetFlyBehavior(), new LoudQuackBehavior(), new PixelDisplayBehavior());

[rubberDuck, wildDuck, gameDuck].forEach(duck => {
  console.log(duck.name);
  duck.display();
  duck.quack();
  duck.fly();
  console.log();
});