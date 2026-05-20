const promesa = require('./promesa');

test('La promesa debe resolverse correctamente', async () => {
    await expect(promesa.promesaCorrecta()).resolves.toBe("Éxito");
});

test('La promesa debe rechazar correctamente', async () => {
    await expect(promesa.promesaIncorrecta()).rejects.toBe("Error");
});