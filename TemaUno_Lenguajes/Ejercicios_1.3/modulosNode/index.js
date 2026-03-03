//Victor Enrique Tuz Dzidz
//AA 1.3 Módulos JS

const fs = require('fs');

// 1. Escribimos el archivo
fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado con éxito.');

    // 2. Dentro del éxito de la escritura, ejecutamos la lectura
    // Usamos 'utf8' para que el contenido sea legible (texto) y no un Buffer de datos
    fs.readFile('archivo.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Contenido del archivo:');
        console.log(data); // Aquí se muestra "Hola desde NodeJS"
    });
});