const request = require("request");
const geocode = require("./utils/geocode");




geocode('Melbourne', (error, data) => {
    console.log(error);
    console.log(data);
});