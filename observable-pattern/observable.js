class Observable {
  
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(observer,  data) {
    const index = this.observers.indexOf(observer);
    this.observers[index].notify(data);
  }

  notifyAll(data) {
    this.observers.forEach(ob => ob.notify(data));
  }
}

module.exports = Observable;
