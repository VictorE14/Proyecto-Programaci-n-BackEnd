const mensaje = require('./cadena');

test('La cadena contiene la palabra mundo', () => {
    expect(mensaje()).toMatch(/mundo/);
});