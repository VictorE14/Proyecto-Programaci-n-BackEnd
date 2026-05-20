const numero = require('./numeros');

test('15 es mayor que 10', () => {
    expect(numero()).toBeGreaterThan(10);
});

test('15 es menor que 20', () => {
    expect(numero()).toBeLessThan(20);
});

test('15 es mayor o igual que 15', () => {
    expect(numero()).toBeGreaterThanOrEqual(15);
});