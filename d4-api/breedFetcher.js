const request = require('request');

const breedName = process.argv[2];
const url = "https://api.thecatapi.com/v1/breeds/search?q=sib"

request(url, (error, resp, body) =>{


if(error){
    return console.log("failed to request details", error);

}



const data = JSON.parse(body);


const breed = data[0];

if(breed){
    console.log(breed.description);
} else {
    console.log(`failed to find breed ${breedName}`)
}


});


