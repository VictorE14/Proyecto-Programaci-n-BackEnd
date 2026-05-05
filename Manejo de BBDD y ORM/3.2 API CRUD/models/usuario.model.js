
// Victor Enrique Tuz Dzidz 
// AA 3.1 Proyecto CRUD API
// 8B
import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Favor de ingresar el nombre']
    },
    edad: {
        type: Number,
        required: [true, 'Favor de ingresar la edad']
    },
    correo: {
        type: String,
        required: [true, 'Favor de ingresar el correo'],
        unique: true
    }
}, {
    timestamps: true
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;