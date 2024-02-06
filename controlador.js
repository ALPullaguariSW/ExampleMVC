class Controlador {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;

    document
      .getElementById("form")
      .addEventListener("submit", this.agregarArticulo.bind(this));
    document
      .getElementById("eliminarTodoBtn")
      .addEventListener("click", this.eliminarTodosArticulos.bind(this));

    this.actualizarVista();
  }

  agregarArticulo(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombreInput").value;
    const precio = parseFloat(document.getElementById("precioInput").value);

    if (nombre && !isNaN(precio)) {
      const articulo = { nombre, precio };
      this.modelo.agregarArticulo(articulo);
      this.actualizarVista();
      document.getElementById("nombreInput").value = "";
      document.getElementById("precioInput").value = "";
    }
  }

  eliminarTodosArticulos() {
    this.modelo.eliminarTodosArticulos();
    this.actualizarVista();
  }

  actualizarVista() {
    this.vista.mostrarArticulos(this.modelo.obtenerArticulos());
    this.vista.mostrarTotalCompra(this.modelo.obtenerTotalCompra());
  }
}

// Instanciamos el modelo, la vista y el controlador
const modelo = new Modelo();
const vista = new Vista();
const controlador = new Controlador(modelo, vista);
