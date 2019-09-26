const request = require('request');
const args = process.argv.slice(2);
const breedName = args[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;



request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body);
  const data = JSON.parse(body);
  const breed = data[0];
  if (!breed) {
    console.log("Not Found!");
    return;
  }

  console.log(breed.description);
});
