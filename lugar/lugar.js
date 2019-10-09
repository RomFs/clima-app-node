const axios = require('axios');


const getLugarLatLng = async(direccionString) => {

    const encodedUrl = encodeURI(direccionString);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'bd205a2f5cmsh9facf24bd0fd2dcp1959d3jsnd7806a670d06' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccionString}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}