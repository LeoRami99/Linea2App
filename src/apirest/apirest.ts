


import axios from 'axios';

// extraer los datos de la api rest
export const apiRest = function(url: string) {
    //deshabilitar cors para que funcione en localhost
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    // axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
    // axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';
    return axios.get(url)
}

// import { HTTP } from '@awesome-cordova-plugins/http';
// class ApiRest {

//     public apiRest(url: string) {
//         return HTTP.get(url,{},{});
//     }
// }
// export const apiRest = new ApiRest();

// import { Http, HttpResponse } from "@capacitor-community/http"
// export async function apiRest(uri: string) {

//     return await Http.request({
//         url: uri,
//         method: 'GET',
//         // headers: {
//         //     // 'Content-Type': 'application/json',
//         //     'Access-Control-Allow-Origin': '*',
//         //     'Access-Control-Allow-Headers': '*',
//         //     'Access-Control-Allow-Methods': '*',
//         //     'Access-Control-Allow-Credentials': 'true',
//         //     'Access-Control-Expose-Headers': 'access-control-allow-origin',
//         //     "X-Requested-With": 'XMLHttpRequest'
//         // }
// })
// }

// export const doGet = async () => {
//     const options = {
//       url: 'http://192.168.0.8:8080/http://192.168.0.11:8080/libros/1',
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Headers': '*',
//         'Access-Control-Allow-Methods': '*',
//         'Access-Control-Allow-Credentials': 'true',
//         'Access-Control-Expose-Headers': 'access-control-allow-origin',
//       }

//     };
  
//     const response: HttpResponse = await Http.get(options);
    
    
//     // or...
//     // const response = await Http.request({ ...options, method: 'GET' })
//   };

