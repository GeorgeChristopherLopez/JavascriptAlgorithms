function uniteUnique(arr) {
  let res = [];
  for(let x = 0; x < arguments.length; x++){
    console.log(arguments[x]);
    
    for (let y = 0; y < arguments.length; y++){
      for (let z = 0; z < arguments[y].length; z++){
      console.log(arguments[y][z])
     
      console.log(arguments[x].includes(arguments[y][z]));
      if(arguments[x].includes(arguments[y][z])&& !res.includes(arguments[y][z])){
          res.push(arguments[y][z]);
      }
      }
    }

  }
  return(res);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
