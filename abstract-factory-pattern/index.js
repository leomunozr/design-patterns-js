const {
  winterVacationsFactory,
  springVacationsFactory,
  summerVacationsFactory,
  autumnVacationsFactory
} = require('./vacationsFactory');

const winterVacations = {
  name: winterVacationsFactory.getName(),
  outfit: winterVacationsFactory.getOutfit(),
  activities: winterVacationsFactory.getActivities()
};
print(winterVacations);

const springVacations = {
  name: springVacationsFactory.getName(),
  outfit: springVacationsFactory.getOutfit(),
  activities: springVacationsFactory.getActivities()
};
print(springVacations);

const summerVacations = {
  name: summerVacationsFactory.getName(),
  outfit: summerVacationsFactory.getOutfit(),
  activities: summerVacationsFactory.getActivities()
};
print(summerVacations);

const autumnVacations = {
  name: autumnVacationsFactory.getName(),
  outfit: autumnVacationsFactory.getOutfit(),
  activities: autumnVacationsFactory.getActivities()
};
print(autumnVacations);

function print(obj) {
  console.log(JSON.stringify(obj, null, 2));
}
