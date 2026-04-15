import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// 3. Carpeta pública para archivos estáticos
app.use(express.static("public"));

// Configurar EJS como motor de plantillas
app.set("view engine", "ejs");

// 4. Ruta principal
app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://api.animechan.io/v1/quotes/random");
        
        // Ajustamos las variables según la estructura de la API proporcionada
        res.render("index", {
            cita: result.data.data.content,
            personaje: result.data.data.character.name,
        });
    } catch (error) {
        console.error("Error al obtener la cita:", error.message);
        res.status(500).send("Error al obtener la cita");
    }
});

// 6. Escuchar en el puerto
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});