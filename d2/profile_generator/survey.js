const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




rl.question('what is your name?', (one) => {

  
  
  

  rl.question('whats an activity you like doing? ', (two ) => {

    //process.stdin.write(`activity that he/she likes doing: ${answer}`);
      
    rl.question('what do you listen to while doing that? ', (three) => {

        //process.stdin.write(`listens to ${answer} while `);
          
        rl.question('which meal is your favourite(dinner, brunch)? ', (four) => {

            //process.stdin.write(`listens to ${answer} while `);
              
            rl.question('whats your facourtie thing to eat for that meal? ', (five) => {

                //process.stdin.write(`listens to ${answer} while `);
                  
                rl.question('which sport is your absolute favourite? ', (six) => {

                    //process.stdin.write(`listens to ${answer} while `);
                      
                    rl.question('what is your superpower? in a few words, tell us what you are amazing at! ', (seven) => {

                        console.log(`The survey persons name is ${one} and that person likes to ${two}, and likes listening to ${three} while doing sports. The persons favourite meal is ${four} and loves eating ${five} for that meal. The persons absolute favourite thing to eat is ${six}, and the persons superpower is ${seven}.`)
                          
                      rl.close();
                        
                        
                        
                      
                        
                      });
                    
                    
                    
                  
                    
                  });
                
                
                
              
                
              });
            
            
            
          
            
          });
        
        
      
        
      });
  
  
      
  
    //rl.close();
  });



    

  //rl.close();
});

