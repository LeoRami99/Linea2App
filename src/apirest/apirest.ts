
  

import axios from 'axios';

//extraer los datos de la api rest
export const apiRest = function() {
    //deshabilitar cors para que funcione en localhost
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';

    axios.get('https://7f67-2800-484-1386-be00-00-5.ngrok.io/libros').then(response=>{
        console.log("Funciono");
        console.log(response.data);
    }).catch(()=>{
        console.log("No funciono");
    })
}

// export const apiRest = async (url: string) => {
//     const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//             'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//             'Access-Control-Allow-Credentials': 'true',
            
//         }
//     });
//     const data = await response.json();
//     return data;
// }



// console.log(getData().then(data => console.log(data)));
// const uri="http://192.168.0.7/webservice/post.php?id=1";
