import express from 'express';

const app = express();
const port = 3000;

// 1. GET - Ruta raíz
app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo</h1>');
    res.sendStatus(200);
});

// 2. POST - Registro de usuario (Código 201: Created)
app.post('/registro', (req, res) => {
    // Nota: enviamos el código de estado antes o junto al mensaje
    res.status(201).send('Registro exitoso');
});

// 3. PUT - Actualizar usuario completo
app.put('/usuario/actualizar', (req, res) => {
    res.status(200).send('Actualización exitosa');
});

// 4. PATCH - Modificar parte del usuario
app.patch('/usuario/modificar', (req, res) => {
    res.status(200).send('Modificación exitosa');
});

// 5. DELETE - Eliminar usuario
app.delete('/usuario/eliminar', (req, res) => {
    res.status(200).send('Eliminación exitosa');
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en puerto ${port}`);
});