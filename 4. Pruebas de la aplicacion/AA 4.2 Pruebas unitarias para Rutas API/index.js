// Victor Enrique Tuz Dzidz - ISC 8B
// Práctica AA 3.3: Desacoplando el ORM (Uso de MongoDB Driver Nativo)

import express from 'express';
import { MongoClient, ObjectId } from 'mongodb'; // Importamos el driver oficial
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const puerto = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.uri;
const client = new MongoClient(uri);

let db; // Variable para almacenar la instancia de la base de datos

// --- CONFIGURACIÓN DE LA CONEXIÓN ---
async function conectarBD() {
    try {
        await client.connect();
        // Mantenemos el nombre de la base de datos que estés usando en Atlas
        db = client.db('test'); 
        console.log('Conexión exitosa a MongoDB (Driver Nativo)');
    } catch (error) {
        console.error('Error crítico al conectar a MongoDB:', error);
        process.exit(1); // Detener el servidor si no hay conexión
    }
}

if (process.env.NODE_ENV !== 'test') {
    conectarBD();
}
// --- RUTAS DE LA API ---

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD (Sin ORM)');
});

// POST: Crear un nuevo usuario
app.post('/usuarios', async (req, res) => {
    try {
        const { nombre, edad, correo } = req.body;
        
        // Validación manual (sustituye lo que hacía el modelo de Mongoose)
        if (!nombre || !edad || !correo) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const nuevoUsuario = { nombre, edad: Number(edad), correo, fechaCreacion: new Date() };
        const resultado = await db.collection('usuarios').insertOne(nuevoUsuario);
        
        res.status(201).json({ _id: resultado.insertedId, ...nuevoUsuario });
    } catch (error) {
        console.error('Error al crear:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

// GET: Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        // .find() devuelve un cursor, .toArray() lo convierte en una lista legible
        const usuarios = await db.collection('usuarios').find().toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});

// GET: Buscar un usuario por ID
app.get('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // IMPORTANTE: Debemos usar new ObjectId() para que MongoDB reconozca el ID
        const usuario = await db.collection('usuarios').findOne({ _id: new ObjectId(id) });
        
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Formato de ID no válido' });
    }
});

// PUT: Actualizar un usuario
app.put('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;

        const resultado = await db.collection('usuarios').findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: datosActualizados },
            { returnDocument: 'after' } // Esto equivale al { new: true } de Mongoose
        );

        if (!resultado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar usuario' });
    }
});

// DELETE: Eliminar un usuario
app.delete('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await db.collection('usuarios').deleteOne({ _id: new ObjectId(id) });

        if (resultado.deletedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar usuario' });
    }
});

// Solo levantar el puerto si NO estamos ejecutando los tests de Jest
if (process.env.NODE_ENV !== 'test') {
    app.listen(puerto, () => {
        console.log(`Servidor corriendo en http://localhost:${puerto}`);
    });
}

export { app, conectarBD, client };