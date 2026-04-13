import axios from "axios";

const registrarUsuario = async () => {
  // Tu llave exacta de la captura anterior
  const miLlave = "pro_1561595957ee1803a04e69712f7c712e1353ed5f435dac5165f11984ed5b3eb8";

  try {
    const respuesta = await axios.post('https://reqres.in/api/register', {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    }, {
      headers: { 
        'x-api-key': miLlave // Asegúrate de que no tenga espacios al inicio o final
      }
    });
    console.log('--- SECCIÓN 3: REGISTRO EXITOSO ---');
    console.log('Respuesta:', respuesta.data);
  } catch (error) {
    // Si sigue saliendo error, imprimimos el objeto completo para ver qué falta
    console.error('Error en el registro:', error.response ? error.response.data : error.message);
  }
};

registrarUsuario();