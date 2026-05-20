const valores = require('./valores');

test('Debe ser null', () => {
    expect(valores.valorNull()).toBeNull();
});

test('Debe ser undefined', () => {
    expect(valores.valorUndefined()).toBeUndefined();
});

test('Debe estar definido', () => {
    expect(valores.valorDefinido()).toBeDefined();
});