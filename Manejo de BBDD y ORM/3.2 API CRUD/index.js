import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Intenta cargar el archivo y guarda el resultado
const resultado = dotenv.config();

if (resultado.error) {
    console.error("❌ No se pudo cargar el archivo .env:", resultado.error);
} else {
    console.log("✅ Variables cargadas correctamente");
}

const app = express();
const uri = process.env.uri;

console.log("Tu URI es:", uri); // Debería mostrar la cadena, no undefined

mongoose.connect(uri)
    .then(() => console.log("✅ Conexión exitosa a MongoDB"))
    .catch((error) => console.error("❌ Error de Mongoose:", error));