

# Ejercicio 2 Arquitectura MVC usando VanillaJS (4puntos)

- a. ¿Por qué es el valor de this es undefined?

    La razon por la que el valor sea undefined es porque 
    cuando hacemos el this.service.addTodo no le pasamos nada a la funcion de addTodo, ni
    la ejecutamos.
    Lo que esta haciendo en este controller es en la vista pasarle una funcion y dentro de esa
    function ejecutar el servicio.
    Que realmente lo que se podria hacer es esto
    this.view.bindAddTodo = ((todoText) => {
        this.service.addTodo(todoText);
    })
