const input = process.argv.slice(2);

try{
  if(input.length === 0){
    throw new Error("Must be a positive integer entered");
  }
  const inputArr = [];
  for(const time of input){
    const integer = parseInt(time);
    if(isNaN(integer) || typeof integer !== "number" || integer <= 0){
      throw new Error("Must be a positive integer entered");
    }
    inputArr.push(integer);
  }

  for(const time of inputArr){
    setTimeout(()=>{process.stdout.write('\u0007')}, time * 1000);
  }

}catch(err){
  console.log(err.message);
}
