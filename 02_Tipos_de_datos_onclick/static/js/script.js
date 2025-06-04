// Declaración de variables
let numeroEntero = 2009;
let numeroDecimal = 16;
let cadenaTexto = "Sala #5";
let valorBooleano = true;
let arregloNumeros = [1, 2, 3, 4];
let objetoPersona = { nombre: "Ana", edad: 30 };
let valorIndefinido;
let valorNulo = null;
const mes = "Junio";

// Funciones para mostrar cada valor con alert()
function mostrarAnioNacimiento() {
  alert("Año de nacimiento: " + numeroEntero);
}

function MostrarEdad() {
  alert("Edad del estudiante: " + numeroDecimal);
}

function mostrarSalonEstudiante() {
  alert("Salon del estudiante: " + cadenaTexto);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
  alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}
