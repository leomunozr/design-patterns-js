class Observer {

  constructor(name) {
    this.name = name;
  }

  notify(data) {
    console.log(`${this.name} says: ${data}`);
  }
}

module.exports = Observer;
