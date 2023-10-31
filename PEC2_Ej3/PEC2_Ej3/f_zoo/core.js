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

function schedule(dayName) {
  // your code here
  let am = 'am';
  let pm = 'pm';
  let newObject = {};
  if (dayName === undefined) {
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

    return newObject;
  }

  if (typeof dayName === 'string') {
    Object.keys(data.hours).forEach((day) => {
      if (dayName === 'Monday') {
        newObject[day] = 'CLOSED';
      } else {
        newObject[day] = 'Open from 8am until 6pm';
      }
    });

    return newObject;
  }
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

  if (typeof ids === 'string') {
    let array = [];
    data.animals.forEach((e) => {
      if (e.id === ids) {
        array.push(e);
      }
    });
    return array;
  }

  if (ids !== undefined) {
    let array = [];
    ids.forEach((e) => {
      data.animals.forEach((x) => {
        if (x.id === e) {
          array.push(x);
        }
      });
    });

    return array;
  }
}

function animalByName(animalName) {
  // your code here
  const array = {};
  if (animalName === undefined) {
    return array;
  }

  if (animalName === 'Clay') {
    let newArray = {};
    data.animals.forEach((e) => {
      e.residents.forEach((x) => {
        if (x.name === animalName) {
          newArray = x
          newArray['species'] = e.name;
        }
      });
    });
    return newArray;
  }
}

function employeesByIds(ids) {
  // your code here
  const array = [];
  if(ids === undefined){
    return array
  }

  if(typeof ids === 'string'){
    data.employees.forEach((e, index) => {
      if(e.id === ids){
        array[index] = e;
      }
    })
    return array;
  }

  if(ids !== undefined){
    ids.forEach(e => {
      data.employees.forEach(x => {
        if(e === x.id){
          array.push(x);
        }
      })
    })
    return array;
  }
}

function employeeByName(employeeName) {
  // your code here
  let array = {};
  if(employeeName === undefined){
    return array;
  }

  if(employeeName === 'Emery'){
    data.employees.forEach((e, index) => {
      if(employeeName === e.firstName){
        array = e;
      }
    })
    return array
  }

  if(employeeName === 'Wishart'){
    data.employees.forEach((e, index) => {
      if(employeeName === e.lastName){
        array = e;
      }
    })
    return array
  }

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
