const sumar = require('./igualdad');

test('10 + 10 debe ser igual a 20', () => {
    expect(sumar()).toBe(20);
});