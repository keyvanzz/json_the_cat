const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
        if (error) {
            callback(error, null);
            return;
        }
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
        // console.log(typeof body);
        const data = JSON.parse(body);
        const breed = data[0];
        if (!breed) {
            callback("Cat breed Not Found!", null);
        } else {
            callback(null, breed.description);
        }
    });
};

module.exports = { fetchBreedDescription };
