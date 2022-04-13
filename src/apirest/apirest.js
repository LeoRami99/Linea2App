// "use strict";
// exports.__esModule = true;
// exports.apiRest = void 0;
// //Extract the data from the api rest whit cors permissions
// var axios_1 = require("axios");
// //extraer los datos de la api rest
// var apiRest = function () {
//     //deshabilitar cors para que funcione en localhost
//     axios_1["default"].defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//     axios_1["default"].defaults.headers.common['Access-Control-Allow-Headers'] = '*';
//     axios_1["default"].defaults.headers.common['Access-Control-Allow-Methods'] = '*';
//     axios_1["default"].defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';
//     axios_1["default"].get('https://192.168.0.11:80/webservice/post.php').then(function (response) {
//         console.log("Funciono");
//         console.log(response.data);
//     })["catch"](function () {
//         console.log("No funciono");
//     });
// };
// exports.apiRest = apiRest;
// // console.log(apiRest());
// // export const apiRest = async (url: string) => {
// //     const response = await fetch(url, {
// //         method: 'GET',
// //         headers: {
// //             'Content-Type': 'application/json',
// //             'Access-Control-Allow-Origin': '*',
// //             'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
// //             'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
// //             'Access-Control-Allow-Credentials': 'true',
// //         }
// //     });
// //     const data = await response.json();
// //     return data;
// // }
// // console.log(getData().then(data => console.log(data)));
// // const uri="http://192.168.0.7/webservice/post.php?id=1";

import { Http } from '@capacitor-community/http';

getApiRest = async () => {
    const response = await Http.get({
        url: 'https://localhost:80/webservice/post.php',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Credentials': 'true',
        }
    });
    const data = await response.data;
    return data;
}