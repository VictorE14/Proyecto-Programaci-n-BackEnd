import express from "express";

const app = express();
const port = 3000;

// Paso 18 y 19: Ruta principal
// Al acceder a la raíz, imprimiremos la información del request en la terminal
app.get("/", (req, res) => {
    console.log(req); // Muestra los encabezados y datos de la solicitud en consola
    res.send("<h1>Bienvenido a mi página web</h1>");
});

// Paso 19: Ruta "Acerca de"
app.get("/about", (req, res) => {
    res.send("<h1>Acerca de</h1>");
});


app.get("/contact", (req, res) => {
    res.send("<h1>9831860555</h1>");
});

// Paso 19 (Corregido): Manejo de rutas no encontradas (404)
// Atrapará cualquier solicitud que no coincida con las rutas anteriores
app.use((req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


