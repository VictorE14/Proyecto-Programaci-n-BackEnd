// Victor Enrique Tuz Dzidz
// Ejercicio 1.4.3 - Práctica 1.4.3 Express Middleware

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"; // Paso 5: Instalar body-parser

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Paso 6: Declara la variable nombreEquipo de manera global
var nombreEquipo = ""; 

// Configuración de body-parser para procesar la información del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Paso 2: Crear la función llamada registrador
function registrador(req, res, next) {
  // Paso 3: Imprimir en consola los datos enviados por el usuario
  console.log("Datos del formulario:", req.body);
  
  // Paso 4: Asigna en la variable nombreEquipo los valores de las claves
  // Concatenamos adjetivo + sustantivo para obtener "SaltamontesBrillante"
  nombreEquipo = req.body["adjetivo"] + req.body["sustantivo"]; 
  
  // Paso 5: Agregar al final de la función next()
  next();
}

// Paso 7: Implementa el middleware usando el método .use
app.use(registrador);

// Ruta principal para mostrar el HTML
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Paso 8: Ruta POST para mostrar el resultado final
app.post("/submit", (req, res) => {
  // Usamos h1 y h2 para replicar el estilo de letra de la actividad
  res.send(`
    <h1>El nombre de tu equipo es:</h1>
    <h2>${nombreEquipo}✌️</h2>
  `);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});