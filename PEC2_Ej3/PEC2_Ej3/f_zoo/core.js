const data = require('./data');

function entryCalculator(entrants) {
  // your code here
  if (entrants === undefined) {
    return 0;
  }

  if (Object.keys(entrants).length == 0) {
    return 0;
  }
  if (entrants.Adult) {
    return (
      entrants.Adult * data.prices.Adult +
      entrants.Child * data.prices.Child +
      entrants.Senior * data.prices.Senior
    );
  }
}

function schedule(dayName = 'Monday') {
  // your code here
  let am = 'am';
  let pm = 'pm';

  let newObject = {};
  Object.keys(data.hours).forEach((e) => {
    let { open, close } = data.hours[e];
    let openFormatted;
    let closeFormatted;
    if (open !== 0 && close !== 0) {
      openFormatted = open <= 12 ? open : open - 12;
      closeFormatted = close > 12 ? close - 12 : close;
      newObject[
        e
      ] = `Open from ${openFormatted}${am} until ${closeFormatted}${pm}`;
    } else {
      newObject[e] = 'CLOSED';
    }
  });

  let oneDay = {};
  Object.keys(data.hours).forEach((day) => {
    day === dayName && (oneDay[day] = 'CLOSED');
  });

  return newObject;
}

function animalCount(species) {
  // your code here
  let newObject = {};
  if (species === undefined) {
    Object.keys(data.animals).forEach((e) => {
      let { name, residents } = data.animals[e];
      newObject[name] = name;
      newObject[name] = residents.length;
      species = newObject[name];
    });
    return newObject;
  }

  if (typeof species === 'string') {
    Object.keys(data.animals).forEach((e) => {
      if (data.animals[e].name === species) {
        species = data.animals[e].residents.length;
      }
    });
    return species;
  }
}

function animalMap(options) {
  // your code here
  const mapOptions = {};
  if (options === undefined) {
    data.animals.forEach((e) => {
      if (mapOptions[e.location]) {
        mapOptions[e.location] = [...mapOptions[e.location], e.name];
      } else {
        mapOptions[e.location] = [e.name];
      }
    });
    return mapOptions;
  }

  // if (options?.includeNames === true) {
  //   const objectArray = {};
  //   data.animals.forEach((e) => {
  //     if (!objectArray[e.location]) {
  //       objectArray[e.location] = {};
  //     }
  //     e.residents.forEach((a) => {
  //       if (objectArray[e.location][e.name]) {
  //         objectArray[e.location][e.name].push(a.name);
  //       } else {
  //         objectArray[e.location][e.name] = [a.name];
  //       }
  //     });
  //   });
  //   return objectArray;
  // }
}

function animalPopularity(rating) {
  // your code here
  let popularAnimals = {};
  if (rating === undefined) {
    data.animals.forEach((e) => {
      if (popularAnimals[e.popularity]) {
        popularAnimals[e.popularity].push(e.name);
      } else {
        popularAnimals[e.popularity] = [e.name];
      }
    });
    return popularAnimals;
  }

  if (rating !== undefined) {
    let array = [];
    data.animals.forEach((e) => {
      if (e.popularity === rating) {
        array.push(e.name);
      }
    });
    return array;
  }
}

function animalsByIds(ids) {
  // your code here
  let array = [];
  if (ids === undefined) {
    return array;
  }

  if (ids !== undefined) {
    let array = [];
    data.animals.forEach((e) => {
      if (e.id === ids) {
        array.push(e);
      }
    });
    return array;
  }
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage,
};
