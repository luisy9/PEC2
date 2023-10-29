/*Creamos una arrow funtion que se llama findOne
 */
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  //Inicializamos un setTimeout que parar cuando hayan pasado 2000 milisegundos
  setTimeout(() => {
    //Luego hacemos una busqueda por el indice de el array que le pasemos
    const element = list.find((element) => element[key] === value);
    /* Esta linea quiere decir que si element es true, es decir que ha encontrado el inidice, encontes se ejecutara
    onSuccess(element), y le pasaremos el name que ha encontrado
    Si esto falla encontes se ejecutara onError y le pasaremos el msg.
    */
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
  }, 2000);
};

/* 
    Creamos funcion de onSuccess para imprimir por consola un mensaje
    Esta funcion solo se ejecutara si ha encontrado el inidice en el objeto
*/
const onSuccess = ({ name }) => console.log(`user: ${name}`);

/* Creamos funcion de onError para imprimir por consola un mensaje
    que guardaremos la ejecucion de esta que lanza un console.log(msg) del mensage que mandamos.
    Esta funcion solo se ejecutara si no ha encontrado el indice
*/
const onError = ({ msg }) => console.log(msg);

//Creamos un un array con objetos dentro, con sus indices y sus respectivos valores.
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

//Pinta en consola findOne success
console.log('findOne success');
//Ejecuta la funcion de findOne y le envia el array, el name, que es el indice de el objeto y el nombre que queremos buscar
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

//Pinta en consola findOne error
console.log('findOne error');
//Ejecuta la funcion de findOne y le envia el array, el name, que es el indice de el objeto y el nombre que queremos buscar
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/* La primera vez que se ejecuta la funcion lo encontrara, pero la segunda vez que lo ejecuta
no lo encontrara ya que le estamos pasando un nombre que no esta dentro de el array.
eso es lo que esta pasando en la consola.
Hasta que no se conculye la respuesta de el setTimeout no la imprime y pasa a la siguiente declaración y por eso imprime el console.log

*/
