import axios from "axios";

const obtenerUsuario = async () => {
  // 1. Llave de tu proyecto para saltar el bloqueo del servidor
  const miLlave = "pro_1561595957ee1803a04e69712f7c712e1353ed5f435dac5165f11984ed5b3eb8";
  
  // 2. Credenciales en Base64 (Sección 3)
  const credenciales = Buffer.from('eve.holt@reqres.in:pistol').toString('base64');

  try {
    // Realizamos la petición GET al usuario 4
    const response = await axios.get('https://reqres.in/api/users/4', {
      headers: {
        'x-api-key': miLlave,
        'Authorization': `Basic ${credenciales}`
      }
    });

    // Imprimimos el objeto completo para que se vea como en la imagen de la práctica
    console.log('Datos del usuario:', response.data);

  } catch (error) {
    console.error('Error al obtener datos:', error.response ? error.response.data : error.message);
  }
};

obtenerUsuario();