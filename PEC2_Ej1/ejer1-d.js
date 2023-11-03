/* Creamos funcion que pasa el name que le pasamos y
devuelve una nueva Promise
*/
async function findOne(name, timeOut) {
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
      try {
        //Hacemos el find de el array que tenemos y lo comparamos con el name que le pasamos
        const element = users.find((index) => index.name === name);
        resolve(`user: ${element.name}`);
      } catch (error) {
        /*
            Si pasa encuentra el nombre se ejecutara el resolve de la funcion findOne y sin no se ejecuta pues 
            se ejecutara el reject
        */
        reject({ mgs: 'ERROR: Element not found' });
      }
    }, timeOut);
  });
}

//Creamos esta funcion async ya que estamos ejecutando una funcion con un Promise
/*
  Luego realizamos las llamadas a las funciones con await.
  Luego mediante el resolve y el catch sabremos si ha funcionado la tarea que tenia las funciones.
*/
async function nameSearch() {
  await findOne('Luis', 2000)
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log('hola');
  await findOne('Carlos', 2500)
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log('adios');
}

//Inicamos la funcion para que se ejecuten las llamadas a la funcion principal
nameSearch();
