//Tema 2: Api´s
//AA 2.2 Axios y autenticación 
//Victor Enrique Tuz Dzidz

import axios from 'axios';

const ejecutarSeccionTokens = async () => {
    // 1. Datos de tu imagen para validar el acceso al servidor
    const urlProyecto = "https://reqres.in/api/collections/products/records?project_id=12056";
    const miLlave = "pro_1561595957ee1803a04e69712f7c712e1353ed5f435dac5165f11984ed5b3eb8";

    try {
        console.log('--- SECCIÓN 5: INICIANDO FLUJO DE TOKENS ---');

        // PASO A: Obtener el Token (Login)
        // Enviamos la x-api-key en los headers para que nos permita el POST [cite: 12]
        const respuestaLogin = await axios.post('https://reqres.in/api/login', {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }, {
            headers: { 'x-api-key': miLlave }
        });

        const miToken = respuestaLogin.data.token;
        console.log('1. Token obtenido con éxito:', miToken);

        // PASO B: Acceder a datos protegidos usando el Token
        // Usamos la cabecera 'Authorization' con el formato Bearer [cite: 206]
        const respuestaDatos = await axios.get('https://reqres.in/api/users/2', {
            headers: {
                'x-api-key': miLlave,
                'Authorization': `Bearer ${miToken}` 
            }
        });

        console.log('2. Acceso concedido. Usuario:', respuestaDatos.data.data.first_name);
        console.log('--- PRÁCTICA FINALIZADA ---');

    } catch (error) {
        // Axios maneja el error automáticamente en el bloque catch [cite: 11, 73]
        console.error('Error en la ejecución:', error.response ? error.response.data : error.message);
    }
};

ejecutarSeccionTokens();
