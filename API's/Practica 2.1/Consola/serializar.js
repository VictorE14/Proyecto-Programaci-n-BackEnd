const objetoJavaScript = {
    nombre: "Taco de Pollo",
    ingredientes: {
        proteina: "Pollo",
        salsa: "Salsa Verde"
    }
};

// Serializar: convertimos el objeto a una cadena JSON
const jsonString = JSON.stringify(objetoJavaScript);

console.log("Resultado de la Serialización:");
console.log(jsonString); 
// Resultado: {"nombre":"Taco de Pollo","ingredientes":{"proteina":"Pollo","salsa":"Salsa Verde"}}