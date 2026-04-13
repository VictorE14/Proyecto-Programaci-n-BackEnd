import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(respuesta => {
    // Axios convierte automáticamente a JSON, accedemos a .data [cite: 68]
    console.log('Datos recibidos con Axios:', respuesta.data);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud:', error);
  });