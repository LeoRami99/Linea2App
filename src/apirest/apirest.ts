
  

import axios from 'axios';

// extraer los datos de la api rest
export const apiRest = function(url: string) {
    //deshabilitar cors para que funcione en localhost
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';
    return axios.get(url)
}

