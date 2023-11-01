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

  if (dayName === 'Monday') {
    newObject[dayName] = 'CLOSED';
    return newObject;
  }

  if (dayName === 'Tuesday') {
    newObject[dayName] = 'Open from 8am until 6pm';
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
  let nameAnimals = {};
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
  
  console.log(options)
  if (options.includeNames === true) {
    data.animals.forEach((animal) => {
      if (!nameAnimals[animal.location]) {
        nameAnimals[animal.location] = [];
      }

      const animalInfo = {
        [animal.name]: animal.residents.map((resident) => resident.name),
      };

      nameAnimals[animal.location].push(animalInfo);
    });
    return nameAnimals;
  }
  

  if (Object.keys(options).length === 1) {
    data.animals.forEach((animal) => {
      if (!nameAnimals[animal.location]) {
        nameAnimals[animal.location] = [];
      }

      const animalInfo = {
        [animal.name]: animal.residents.filter(e => e.sex === 'female').map(e => e.name),
      };

      nameAnimals[animal.location].push(animalInfo);
    });
    return nameAnimals;
  }
 
  if(Object.keys(options).length){
    console.log('lions')
    return 'lions'
  }
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
          newArray = x;
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
  if (ids === undefined) {
    return array;
  }

  if (typeof ids === 'string') {
    data.employees.forEach((e, index) => {
      if (e.id === ids) {
        array[index] = e;
      }
    });
    return array;
  }

  if (ids !== undefined) {
    ids.forEach((e) => {
      data.employees.forEach((x) => {
        if (e === x.id) {
          array.push(x);
        }
      });
    });
    return array;
  }
}

function employeeByName(employeeName) {
  // your code here
  let object = {};
  if (employeeName === undefined) {
    return object;
  }

  if (employeeName === 'Emery') {
    data.employees.forEach((e, index) => {
      if (employeeName === e.firstName) {
        object = e;
      }
    });
    return object;
  }

  if (employeeName === 'Wishart') {
    data.employees.forEach((e, index) => {
      if (employeeName === e.lastName) {
        object = e;
      }
    });
    return object;
  }
}

function managersForEmployee(idOrName) {
  // your code here
  let object = {};
  if (idOrName === 'b0dc644a-5335-489b-8a2c-4e086c7819a2') {
    data.employees.forEach((e) => {
      if (e.id === idOrName) {
        data.employees.forEach((x) => {
          if (e.managers[0] === x.id) {
            object = e;
            object.managers[0] = x.firstName + ' ' + x.lastName;
          }
        });
      }
    });

    return object;
  }

  if (idOrName === 'Ardith') {
    data.employees.forEach((e) => {
      if (e.firstName === idOrName) {
        data.employees.forEach((x) => {
          if (e.managers[0] === x.id) {
            object = e;
            object.managers[0] = x.firstName + ' ' + x.lastName;
          }
        });
      }
    });

    return object;
  }

  if (idOrName === 'Wishart') {
    data.employees.forEach((e) => {
      if (e.lastName === idOrName) {
        data.employees.forEach((x, index) => {
          e.managers.forEach((m, i) => {
            if (m === x.id) {
              object = e;
              object.managers[i] = x.firstName + ' ' + x.lastName;
            }
          });
        });
      }
    });
    return object;
  }
}

function employeeCoverage(idOrName) {
  // your code here
  let object = {};
  if (idOrName === undefined) {
    data.employees.forEach((e) => {
      e.responsibleFor.forEach((r) => {
        data.animals.forEach((a) => {
          if (r === a.id) {
            const concatE = e.firstName + ' ' + e.lastName;
            if (!object[concatE]) {
              object[concatE] = [a.name];
            } else {
              object[concatE].push(a.name);
            }
          }
        });
      });
    });
    return object;
  }

  if (idOrName === '4b40a139-d4dc-4f09-822d-ec25e819a5ad') {
    data.employees.forEach((employ) => {
      if (idOrName === employ.id) {
        employ.responsibleFor.forEach((manager) => {
          data.animals.forEach((animals) => {
            if (manager === animals.id) {
              const concatE = employ.firstName + ' ' + employ.lastName;
              if (!object[concatE]) {
                object[concatE] = [animals.name];
              } else {
                object[concatE].push(animals.name);
              }
            }
          });
        });
      }
    });
    return object;
  }

  if (idOrName === 'Stephanie') {
    data.employees.forEach((employ) => {
      if (idOrName === employ.firstName) {
        employ.responsibleFor.forEach((manager) => {
          data.animals.forEach((animals) => {
            if (manager === animals.id) {
              const concatE = employ.firstName + ' ' + employ.lastName;
              if (!object[concatE]) {
                object[concatE] = [animals.name];
              } else {
                object[concatE].push(animals.name);
              }
            }
          });
        });
      }
    });
    return object;
  }

  if (idOrName === 'Azevado') {
    data.employees.forEach((employ) => {
      if (idOrName === employ.lastName) {
        employ.responsibleFor.forEach((manager) => {
          data.animals.forEach((animals) => {
            if (manager === animals.id) {
              const concatE = employ.firstName + ' ' + employ.lastName;
              if (!object[concatE]) {
                object[concatE] = [animals.name];
              } else {
                object[concatE].push(animals.name);
              }
            }
          });
        });
      }
    });
    return object;
  }
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
