const numero = require('./negacion');

test('19 no debe ser igual a 40', () => {
    expect(numero()).not.toBe(40);
});