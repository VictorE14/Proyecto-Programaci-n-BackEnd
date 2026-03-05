//Victor Enrique Tuz Dzidz
//Ejercicio 1.4.3 - PRctica 1.4.3 Express Middleware

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// 1. Declarar variable global (Paso 6 de tu práctica)
var nombreEquipo = "";

// 2. Configurar body-parser (Paso 7)
app.use(bodyParser.urlencoded({ extended: true }));

// 3. Crear el middleware "registrador" (Paso 2 al 5)
function registrador(req, res, next) {
    console.log(req.body); // Muestra los datos en consola
    // Concatena los valores de las claves del formulario
    if (req.body["mascota"] && req.body["adjetivo"]) {
        nombreEquipo = req.body["mascota"] + req.body["adjetivo"];
    }
    next(); // Llama a la siguiente función
}

// 4. Implementar el middleware (Paso 7)
app.use(registrador);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// 5. Esta es la parte que hace que se vea como en tu imagen
app.post("/submit", (req, res) => {
    res.send(`
        <h1>El nombre de tu equipo es:</h1>
        <h2>${nombreEquipo}✌️</h2>
    `);
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});