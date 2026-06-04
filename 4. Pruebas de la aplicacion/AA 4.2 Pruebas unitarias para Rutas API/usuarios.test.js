import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient, ObjectId } from 'mongodb';
import { app } from './index.js';

let mongoServer;
let testClient;
let testDb;

describe('Pruebas Unitarias - Driver Nativo MongoDB (AA 4.2)', () => {
    
    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        testClient = new MongoClient(uri);
        await testClient.connect();
        testDb = testClient.db('test');
        
        
        global.db = testDb; 
    });

    beforeEach(async () => {
        await testDb.collection('usuarios').deleteMany({});
    });

    afterAll(async () => {
        await testClient.close();
        await mongoServer.stop();
    });

    // ==========================================
    // TEST: Obtener todos los usuarios
    // ==========================================
    describe('GET /usuarios', () => {
        it('Debería obtener un arreglo vacío si no hay usuarios', async () => {
            const res = await request(app).get('/usuarios');
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual([]);
        });

        it('Debería retornar la lista de usuarios registrados', async () => {
            await testDb.collection('usuarios').insertOne({
                nombre: 'Landy',
                edad: 22,
                correo: 'landy@gmail.com'
            });

            const res = await request(app).get('/usuarios');
            expect(res.statusCode).toBe(200);
            expect(res.body.length).toBe(1);
            expect(res.body[0].nombre).toBe('Landy');
        });
    });

    // ==========================================
    // TEST: Buscar por ID
    // ==========================================
    describe('GET /usuario/:id', () => {
        it('Debería obtener un usuario por un ID válido', async () => {
            const usuario = { nombre: 'Víctor', edad: 22, correo: 'victor@gmail.com' };
            const insercion = await testDb.collection('usuarios').insertOne(usuario);

            const res = await request(app).get(`/usuario/${insercion.insertedId}`);
            expect(res.statusCode).toBe(200);
            expect(res.body.nombre).toBe('Víctor');
        });

        it('Debería retornar 404 si el usuario no existe', async () => {
            const idFalso = new ObjectId().toString();
            const res = await request(app).get(`/usuario/${idFalso}`);
            expect(res.statusCode).toBe(404);
            expect(res.body).toHaveProperty('error', 'Usuario no encontrado');
        });
    });

    // ==========================================
    // TEST: Actualizar un usuario (PUT)
    // ==========================================
    describe('PUT /usuario/:id', () => {
        it('Debería actualizar los datos de un usuario y retornar estatus 200', async () => {
            const usuarioOriginal = { nombre: 'Erick', edad: 22, correo: 'erick@gmail.com' };
            const insercion = await testDb.collection('usuarios').insertOne(usuarioOriginal);

            const datosNuevos = { nombre: 'Flash Reverso', edad: 35, correo: 'eobard.thawne@centralcity.com' };

            const res = await request(app)
                .put(`/usuario/${insercion.insertedId}`)
                .send(datosNuevos);

            expect(res.statusCode).toBe(200);
            expect(res.body.nombre).toBe('Flash Reverso');
            expect(res.body.edad).toBe(35);
        });
    });

    // ==========================================
    // TEST: Eliminar un usuario (DELETE)
    // ==========================================
    describe('DELETE /usuario/:id', () => {
        it('Debería borrar al usuario y retornar mensaje de éxito', async () => {
            const insercion = await testDb.collection('usuarios').insertOne({ nombre: 'Flash' });

            const res = await request(app).delete(`/usuario/${insercion.insertedId}`);
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('mensaje', 'Usuario eliminado correctamente');
        });
    });
});