const request = require('request');

const breedName = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q="



const fetchBreedDescription = function(breedName, callback) {
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, resp, body) =>{

    const data = JSON.parse(body);
    const breed = data[0];


    breed? callback(null, breed.description):callback(true, "nothing is found");



});
};



module.exports = fetchBreedDescription