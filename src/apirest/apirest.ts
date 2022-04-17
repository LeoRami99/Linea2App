


// import axios from 'axios';

// // extraer los datos de la api rest
// export const apiRest = function(url: string) {
//     //deshabilitar cors para que funcione en localhost
//     axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//     axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
//     axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
//     axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';
//     return axios.get(url)
// }

// import { HTTP } from '@awesome-cordova-plugins/http';
// class ApiRest {

//     public apiRest(url: string) {
//         return HTTP.get(url,{},{});
//     }
// }
// export const apiRest = new ApiRest();

import { Http } from "@capacitor-community/http"
// export async function apiRest(uri: string) {

//     return await Http.request({
//         url: uri,
//         method: 'GET',
//         headers: {
//             // 'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Headers': '*',
//             'Access-Control-Allow-Methods': '*',
//             'Access-Control-Allow-Credentials': 'true',
//             'Access-Control-Expose-Headers': 'access-control-allow-origin',
//         }
// })
// }

const doGet = () => {
    const options = {
      url: 'https://example.com/my/api',
      headers: { 'X-Fake-Header': 'Max was here' },
      params: { size: 'XL' },
    };
  
    const response: HttpResponse = await Http.get(options);
  
    // or...
    // const response = await Http.request({ ...options, method: 'GET' })
  };