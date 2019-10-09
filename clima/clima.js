const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=13137b3d5b4bf9c8c4750599baa85744&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}