const request = require("request");


const forecast = (lat, lon, callback) => {
    const url = `https://api.darksky.net/forecast/1caf05cdf9019c3655afa43ba62c188e/${lon},${lat}?units=si`;

    request( {url : url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to weather server", undefined);
        } else if (response.body.error) {
            callback("Invalid location. Please enter another one", undefined);
        } else {
            callback(undefined, {
                currentTemperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability
            })
        }
    });
}

module.exports = forecast;