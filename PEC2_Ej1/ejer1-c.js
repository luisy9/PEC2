/* Creamos funcion async que pasa el name y el tiempo de espera.
*/
async function findOne(name, timeOut) {
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
      console.log(`user: ${element.name}`);
    } catch (error) {
      /*
          Si pasa encuentra el nombre se ejecutara el resolve de la funcion findOne y sin no se ejecuta pues 
          se ejecutara el reject
        */
      console.log({ mgs: 'ERROR: Element not found' });
    }
  }, timeOut);
}

//Creamos esta funcion async ya que estamos ejecutando una funcion con un setTimeout
/*
    Luego realizamos las llamadas a las funciones con await.

*/
async function nameSearch() {
  await findOne('Luis', 2000);

  await findOne('Carlos', 2500);
}

nameSearch();
