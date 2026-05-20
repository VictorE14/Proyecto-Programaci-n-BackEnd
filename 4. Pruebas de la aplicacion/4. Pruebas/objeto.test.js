const crearObjeto = require('./objeto');

test('Los objetos deben ser iguales', () => {
    expect(crearObjeto()).toEqual({
        nombre: "Adan",
        carrera: "ISC"
    });
});