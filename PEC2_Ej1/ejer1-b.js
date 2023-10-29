/* 
Creamos funcion que pasa el name que le pasamos y
devuelve una Promise
*/
const findOne = (name) => {
  return new Promise((resolve, reject) => {
    //Inicializamos el setTimeout, todo este proceso durara 2000 milisegunados
    setTimeout(() => {
      //Creamos el array de users con dos objetos dentro
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
      /* Hacemos el find de el array que tenemos y lo comparamos con el name que le pasamos
        Y guardamos el resultado en la constante element
      */
      const element = users.find((index) => index.name === name);
      /*
        Si encuentra el nombre se ejecutara el resolve de la funcion findOne y sin no, se ejecutara 
         el reject
      */
      element ? resolve(`user: ${element.name}`) : reject({ mgs: 'ERROR: Element not found' });
    }, 2000);
  });
};

//Los console.logs se ejecutaran antes de que acabe el setTimeout
//Lo que hace es ejecutar el codigo que no esta dentro de la promise antes y luego la promesa
console.log('findOne success');
//Enviamos el parametro Luis a la funcion findOne
findOne('Luis')
  /* 
  El then quiere decir que si se ejecuta el resolve se ejecutara
  el codigo dentro de la funcion de el then
  */
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
