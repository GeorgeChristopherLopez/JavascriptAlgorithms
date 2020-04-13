function addTogether() {
for(let args of arguments)
if(!Number.isInteger(args))
return undefined


if(arguments.length == 2)
return arguments[0]+arguments[1];


for(let args of arguments){

  

  if(Number.isInteger(args))
  return function addTogether(next){
    if(typeof next == "number")
  return args + next;
  else
  return
  undefined;
  }
};



  
}     
  

addTogether(2)([3]);