# Proyecto Web con Programación Orientada a Objetos y MVC

Este proyecto web utiliza los conceptos de Programación Orientada a Objetos (POO) y el patrón Modelo-Vista-Controlador (MVC) para desarrollar una funcionalidad relacionada con un carrito de compras. A continuación, se detalla cómo se aplicaron estos conceptos:

## Tarea 1: Paradigma de la POO aplicado al Desarrollo Web

Para esta tarea, se creó una clase en JavaScript relacionada con la gestión de artículos en el carrito de compras. La clase Articulo se encarga de representar cada artículo con propiedades como nombre y precio, y métodos para realizar operaciones relacionadas con los artículos, como agregar y eliminar.

```javascript
Copy code
class Articulo {
constructor(nombre, precio) {
this.nombre = nombre;
this.precio = precio;
}

// Otros métodos relacionados con la gestión de artículos...
}
```

Luego, se utilizan instancias de esta clase para gestionar los datos de los artículos en el carrito de compras, como se ve en el modelo y el controlador.

## Tarea 2: Implementación del Patrón MVC

El patrón Modelo-Vista-Controlador (MVC) se utilizó para organizar y separar la lógica de la aplicación en tres componentes principales: modelo, vista y controlador.

- Modelo: El modelo gestiona los datos relevantes para la aplicación. En este caso, la clase Modelo se encarga de almacenar y gestionar los artículos del carrito de compras.

- Vista: La vista es responsable de presentar los datos al usuario de manera visualmente atractiva. En este proyecto, la clase Vista se encarga de mostrar los artículos en una tabla HTML y el total de la compra.

- Controlador: El controlador maneja la interacción del usuario y actualiza el modelo y la vista según sea necesario. La clase Controlador se encarga de escuchar eventos del usuario, como agregar o eliminar artículos, y actualizar tanto el modelo como la vista en consecuencia.

# Configuración y Ejecución del Proyecto

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener instalado un servidor web local o una extensión como "Live Server" en Visual Studio Code.
3. Abre el proyecto en tu editor de código.
4. Ejecuta el servidor web local o la extensión "Live Server".
5. Accede al proyecto en tu navegador web.
6. Interactúa con la aplicación para agregar, eliminar artículos y ver el total de la compra.

Con estos pasos, podrás visualizar y utilizar la aplicación web desarrollada con los principios de la Programación Orientada a Objetos y el patrón Modelo-Vista-Controlador. ¡Disfruta de tu experiencia de compra!
