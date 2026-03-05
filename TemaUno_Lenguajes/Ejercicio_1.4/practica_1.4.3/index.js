//Victor Enrique Tuz Dzidz
//Ejercicio 1.4.3 - PRctica 1.4.3 Express Middleware

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Configuración para procesar formularios
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para servir el formulario HTML
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Ruta POST para recibir datos básicos
app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("Datos recibidos");
});

// --- MÉTODOS DE LA TABLA DE ESPECIFICACIONES ---

app.post("/registro", (req, res) => {
    res.status(201).send("Registro exitoso"); // Código 201
});

app.put("/usuario/actualizar", (req, res) => {
    res.status(200).send("Actualización exitosa"); // Código 200
});

app.patch("/usuario/modificar", (req, res) => {
    res.status(200).send("Modificación exitosa"); // Código 200
});

app.delete("/usuario/eliminar", (req, res) => {
    res.status(200).send("Eliminación exitosa"); // Código 200
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});