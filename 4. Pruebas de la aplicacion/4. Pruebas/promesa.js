function promesaCorrecta() {
    return Promise.resolve("Éxito");
}

function promesaIncorrecta() {
    return Promise.reject("Error");
}

module.exports = {
    promesaCorrecta,
    promesaIncorrecta
};