//Eejercicios 1.2.1: Sintaxis básica de node.js
//Alumno: Victor Enrique Tuz Dzidz 


//B
console.log("Ejercicio B");
var nombre = "Ingeniero en Sistemas"; 

// Number (Cubre tanto enteros como decimales)
var edad = 21; 
var promedio = 9.5;

// Boolean (Lógicos)
var esEstudiante = true;

// Object (Estructuras de datos)
var persona = {
    estatura: "considerable",
    complexion: "medio delgado"
};

// Array (Listas)
var materias = ["Sistemas", "Redes", "IA"];

// Undefined (Variable declarada pero sin valor)
var valorNoDefinido;


console.log("Nombre del perfil:", nombre);
console.log("Edad:", edad);
console.log("Promedio académico:", promedio);
console.log("¿Está activo?:", esEstudiante);
console.log("Detalles físicos:", persona);
console.log("Lista de materias:", materias);
console.log("Valor actual de la variable vacía:", valorNoDefinido);


//var texto= "Hola";
//console.log(texto);



//C 
//Declaramos el array 
console.log("Ejercicio C");
const miMezcla = [
  "Hola Mundo",      // 1. String (Texto)
  2024,              // 2. Number (Número)
  true,              // 3. Boolean (Booleano)
  { id: 1 },         // 4. Object (Objeto)
  ["azul", "rojo"]   // 5. Array (Otro array anidado)
];

// Mostramos el resultado en la consola
console.log(miMezcla);




//D. Función polinómica de segundo grado.
//Usamos la palabra reservada 'function' seguida del nombre.
console.log("Ejercicio D");
function calcularPolinomio(x, y) {
  
  const a = 2;
  const b = 4;
  const c = 6;
  const resultado = (a * (x ** 2)) + (b * y) + c;

 
  console.log("El resultado es: " + resultado);
}
calcularPolinomio(5, 3);




console.log("Ejercicio E");
// E. Función flecha que manipula un string
const transformarTexto = (texto) => {
  // Aplicamos el método de manipulación .toUpperCase()
  const textoEnMayusculas = texto.toUpperCase();
  
  console.log("Texto transformado: " + textoEnMayusculas);
};

// Ejemplo de ejecución
transformarTexto("Victor ");


//F Funcion bucle que imprima 1 al 10
console.log("Ejercicio F");
function cuentaRegresiva() {
  console.log("Iniciando cuenta descendente:");
  
  // Empezamos en 10, seguimos mientras sea mayor o igual a 1
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

cuentaRegresiva();

//G
//Objeto representativo de la institución
console.log("Ejercicio G");

const miInstitucion = {
  nombre: "Instituto Tecnológico",
  ubicacion: "Felipe Carrillo Puerto",
  mascota: "Leoncillo", // Propiedad específica solicitada
  estatus: "Activo",
  carreras: 12
};

console.log("La mascota de la institución es un: " + miInstitucion.mascota);


//H
//Agregar Metodo he imprimirlo
console.log("Ejercicio H");
const miInstitucion2 = {
  nombre: "Instituto Tecnológico",
  mascota: "Leoncillo",
  color: "Dorado",
  
  // h. Agregamos el método para describir el objeto
  describir() {
    console.log(`Esta institución es el ${this.nombre} y nuestra mascota es el ${this.mascota}.`);
  }
};

// Imprimimos la descripción usando el método creado
miInstitucion2.describir();


//I
//Funciones Aritmeticas 

console.log("Ejercicio I");
import { sumar, multiplicar } from './matematicas.js';

console.log("Suma desde el módulo: " + sumar(10, 5));
console.log("Multiplicación desde el módulo: " + multiplicar(3, 3));


//J
//Operación asincronica
console.log("Ejercicio J");
function obtenerDatosAsincronos(callback) {
  console.log("Iniciando operación...");
  
  setTimeout(() => {
    const datos = { status: "OK", mensaje: "¡Rugido del leoncillo recibido!" };
    callback(datos); // Ejecutamos el callback con el resultado
  }, 2000); // 2 segundos de espera
}

// Uso de la función
obtenerDatosAsincronos((resultado) => {
  console.log("Resultado asíncrono:", resultado.mensaje);
});


//K
//Conversion de una cadean a un número e incluye el bloque
console.log("Ejercicio K");
function convertirDato(cadena) {
  try {
    const numero = Number(cadena);
    
    // Si el resultado no es un número (NaN), lanzamos un error manual
    if (isNaN(numero)) {
      throw new Error("El texto no puede convertirse en un número válido.");
    }
    
    console.log("Conversión exitosa: ", numero);
  } catch (error) {
    console.error("Error detectado: ", error.message);
  } finally {
    console.log("Proceso de conversión finalizado.");
  }
}

convertirDato("123");         // Éxito
convertirDato("Leoncillo");   // Error manejado

