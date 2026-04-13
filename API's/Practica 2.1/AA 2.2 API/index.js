fetch('https://jsonplaceholder.typicode.com/posts')
  .then(respuesta => {
    if (!respuesta.ok) {
      throw new Error('Respuesta del servidor fallida: ' + respuesta.statusText);
    }
    return respuesta.json(); // Paso necesario en Fetch [cite: 34]
  })
  .then(datos => {
    console.log('Datos recibidos con Fetch:', datos);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud:', error);
  });