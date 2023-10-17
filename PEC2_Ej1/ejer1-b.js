/* Creamos funcion que pasa el name que le pasamos y
devuelve una Promise
*/
const findOne = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        {
          name: 'Carlos',
          rol: 'Teacher',
        },
        {
          name: 'Ana',
          rol: 'Boss',
        },
      ];
      //Hacemos el find de el array que tenemos y lo comparamos con el name que le pasamos
      const element = users.find((index) => index.name === name);
      /*
        Si pasa encuentra el nombre se ejecutara el resolve de la funcion findOne y sin no se ejecuta pues 
        se ejecutara el reject
      */
      element
        ? resolve(`user: ${element.name}`)
        : reject({ mgs: 'ERROR: Element not found' });
    }, 2000);
  });
};

//Los console.logs se ejecutaran antes de que acabe el setTimeout
console.log('findOne success');
findOne('Luis')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

console.log('findOne error');

findOne('Carlos')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

//El findOne se ejecutara dos veces para comprobar dos veces si hay el name que
//hemos pasado o no.