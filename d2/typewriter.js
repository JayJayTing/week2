const sentence = "hello there from lighthouse labs";

function repeat(sentence, index)
{

    
if (index >= sentence.length) {
        console.log();
        return;
    }
    setTimeout(()=> {
        process.stdout.write(sentence[index])
        repeat(sentence, index+1)}, 100);

    // if (index < sentence.length - 1) {
    //     setTimeout(() => {
    //         process.stdout.write(sentence[index]);
    //         repeat(sentence, index+1);
    //     }, 1000);
        
    // }else if(index = sentence.length -1){
    //     setTimeout(() => {
    //         process.stdout.write(sentence[index]);
    //     }, 1000);
    // }

    
}




  repeat(sentence, 0);