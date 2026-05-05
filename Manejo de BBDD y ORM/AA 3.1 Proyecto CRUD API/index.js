// Victor Enrique Tuz Dzidz 
// AA 3.1 Proyecto CRUD API
// 8B
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from './models/usuario.model.js';

dotenv.config();

const app = express();
const puerto = 3000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONEXIÓN A MONGODB
const uri = process.env.uri;

mongoose.connect(uri)
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('Error al conectar:', err));

// RUTA PRINCIPAL
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

// RUTA POST (crear usuario)
app.post('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

// INICIAR SERVIDOR
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});