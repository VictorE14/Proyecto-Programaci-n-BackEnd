// Cadena JSON (Nota que está entre comillas simples para ser un string)
const jsonString = '{"nombre": "Taco de Pollo", "ingredientes":{"proteina": "Pollo", "salsa": "Salsa Verde"}}';

// Deserializar: convertimos la cadena a un objeto JavaScript
const objetoDeserializado = JSON.parse(jsonString);

console.log("Resultado de la Deserialización (Accediendo a la proteína):");
console.log(objetoDeserializado.ingredientes.proteina); // Imprime: Pollo   