const Observer = require('./observer');
const Observable = require('./observable');

const observable = new Observable();

const observer1 = new Observer('1');
const observer2 = new Observer('2');
const observer3 = new Observer('3');

observable.subscribe(observer1);
observable.subscribe(observer2);
observable.subscribe(observer3);

observable.notify(observer1, 'Data from observer');
observable.notifyAll('Hello!');
