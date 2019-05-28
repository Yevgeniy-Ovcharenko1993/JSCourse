const JSON_DATA = require('./dataJson.json');

const MIN_PERCENT = 1;
const LESS_ONE = [];
const MORE_ONE = [];

function jsonFunc() {
  let countResult;
  let population;
  let percentValue;
  const WORLD_POPULATION = JSON_DATA.reduce(
    (prev, sec) => prev + parseInt(sec.Population.replace(',', ''), 10),
    0,
  );
  for (let i = 0; i < JSON_DATA.length; i++) {
    countResult = JSON_DATA[i].Country;
    population = JSON_DATA[i].Population;
    const parsedPop = parseInt(population.replace(',', ''), 10);
    percentValue = (parsedPop / WORLD_POPULATION) * 100;
    if (percentValue > MIN_PERCENT) {
      MORE_ONE.push({ Countries: countResult, PercentValue: percentValue, Population: population });
    } else {
      LESS_ONE.push({ Countries: countResult, PercentValue: percentValue, Population: population });
    }
  }
}

jsonFunc();
const GENERAL = MORE_ONE.concat(LESS_ONE);
GENERAL.sort((a, b) => b.PercentValue - a.PercentValue);
console.log(GENERAL);
