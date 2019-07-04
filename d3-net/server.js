const net = require('net');

const server = net.createServer(client => {
 
    client.on('data', (data) => {
        console.log('client says: ' + data);
      });

      

});


// server.on('connection', (client) => {
//     console.log('New client connected!');

//     client.write('Hello there!');

//     client.setEncoding('utf8'); 

    
   

//   });

  

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});