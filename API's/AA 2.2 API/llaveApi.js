//Tema 2: Api´s
//AA 2.2 Axios y autenticación 
//Victor Enrique Tuz Dzidz

import axios from 'axios';

const consultarConLlave = async () => {
    // Los datos extraídos de tu imagen
    const url = "https://reqres.in/api/collections/products/records?project_id=12056";
    const miLlave = "pro_1561595957ee1803a04e69712f7c712e1353ed5f435dac5165f11984ed5b3eb8";

    try {
        const respuesta = await axios.get(url, {
            headers: {
                'x-api-key': miLlave 
            }
        });
        
        console.log('--- ¡CONEXIÓN EXITOSA CON LLAVE API! ---');
        console.log('Datos recibidos:', respuesta.data);
    } catch (error) {
        console.error('Error al usar la llave:', error.response ? error.response.data : error.message);
    }
};

consultarConLlave();
