import express from "express"; // [cite: 187]
import bodyParser from "body-parser"; // [cite: 187]

const app = express(); // [cite: 188]
const port = 3000; // [cite: 189]

// Configuración de middlewares [cite: 211, 213]
app.use(express.static("public")); 
app.use(bodyParser.json()); 

// 10.a. Cadena JSON (Serializada) [cite: 209]
// REVISA: Asegúrate de que termine con `]; al final.
const recetaJSON = `[
    {
        "id": "0001",
        "nombre": "Taco lechon",
        "ingredientes": {
            "proteina": { "nombre": "Puerco", "preparacion": "Horneado" },
            "salsa": { "nombre": "Tomate verde", "picor": "Medio" },
            "acompañamientos": [
                { "nombre": "Cebolla", "cantidad": "1 cucharada" },
                { "nombre": "Guacamole", "cantidad": "2 cucharadas" }
            ]
        }
    }
]`; 

// 10.b. Deserialización (Convertir a objeto JS) [cite: 210]
const recetasTacos = JSON.parse(recetaJSON);

// 10.e. Handler GET para obtener la receta [cite: 214]
app.get("/receta/:type", (req, res) => {
    // Buscamos el taco que coincida con el tipo [cite: 215, 218]
    const elegirTaco = recetasTacos.find(r => 
        r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase()
    );
    
    // Enviamos el JSON encontrado o el error [cite: 218]
    res.json(elegirTaco || { error: "Receta no encontrada" });
});

// 7.d. Iniciar el servidor [cite: 190]
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
}); 