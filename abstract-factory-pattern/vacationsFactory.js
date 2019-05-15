const {
  winterOutfit,
  springOutfit,
  summerOutfit,
  autumnOutfit
} = require('./outfit');

const {
  winterActivities,
  springActivities,
  summerActivities,
  autumnActivities
} = require('./activity');

const winterVacationsFactory = {
  getName: () => 'Winter vacations',
  getOutfit: () => winterOutfit,
  getActivities: () => winterActivities
};

const springVacationsFactory = {
  getName: () => 'Spring vacations',
  getOutfit: () => springOutfit,
  getActivities: () => springActivities
};

const summerVacationsFactory = {
  getName: () => 'Summer vacations',
  getOutfit: () => summerOutfit,
  getActivities: () => summerActivities
};

const autumnVacationsFactory = {
  getName: () => 'Autumn vacations',
  getOutfit: () => autumnOutfit,
  getActivities: () => autumnActivities
};

module.exports = {
  winterVacationsFactory,
  springVacationsFactory,
  summerVacationsFactory,
  autumnVacationsFactory
};
