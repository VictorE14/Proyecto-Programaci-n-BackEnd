// Importamos las librerías (Sintaxis ESM gracias al "type": "module")
import generateName from 'sillyname';
import { randomSuperhero } from 'superheroes';

// Generamos los nombres aleatorios
const nombreGracioso = generateName();
const miHeroe = randomSuperhero();

// Mostramos los resultados en la terminal
console.log("==========================================");
console.log(`🤖 Nombre aleatorio (sillyname): ${nombreGracioso}`);
console.log(`🦸‍♂️ Superhéroe aleatorio: ${miHeroe}`);
console.log("==========================================");