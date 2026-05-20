const frutas = require('./array');

test('El array contiene uva', () => {
    expect(frutas()).toContain('uva');
});