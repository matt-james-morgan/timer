const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
process.stdout.write("Intstructions: Press b for instant beep\nPress any number between 1-9 to set timer\nPress Ctl - C to exit\n");
rl.on("line",(input)=>{
  if(input === 'ctrl-c'){
    rl.close();
  }else if(input === 'b'){
    process.stdout.write("\u0007");
  }else if(input > 0 && input <= 9){
    process.stdout.write(`Timer set for ${input} seconds\n`);
    setTimeout(()=>{
      process.stdout.write("\u0007")
    }, input * 1000);
  }
})

rl.on("close", ()=>{
  process.stdout.write("Thanks for using me, ciao!\n");
})


