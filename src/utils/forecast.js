const request = require("request");


const forecast = (lat, lon, callback) => {
    const url = `https://api.darksky.net/forecast/1caf05cdf9019c3655afa43ba62c188e/${lon},${lat}?units=si`;

    request( { url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather server", undefined);
        } else if (body.error) {
            callback("Invalid location. Please enter another one", undefined);
        } else {
            callback(undefined, 
                `${body.daily.data[0].summary} It is currently ${body.currently.temperature} 
                out there while the apparent temperature is ${body.currently.apparentTemperature} 
                and there is a ${Math.floor(body.currently.precipProbability/100)}% chance of rain.
                The highest temperature today is ${body.daily.data[0].temperatureHigh} and the lowest 
                temperature today is ${body.daily.data[0].temperatureLow}. Have a good day!`   
            );
        }
    });
}

module.exports = forecast;