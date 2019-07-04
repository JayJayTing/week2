const request = require('request');
request('http://google.com/asdfasdfasdfasm', (error, response, body) => {
  console.log('body:', body);
  console.log(typeof(body));
});