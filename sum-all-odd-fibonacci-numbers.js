function sumFibs(num) {
  let sum = 0;
  let fibNums = [];
  
  // getFibs
  if(num >=2) {
      fibNums.push(1);
      fibNums.push(1);
    for (let x = 2; num >= (fibNums[x-2]+fibNums[x-1]); x++) {
      fibNums.push(fibNums[x-2]+fibNums[x-1]);    
    }
  } else {
     fibNums.push(1);
     fibNums.push(1);
  }
  

  //get sum
  for(let y = 0; y < fibNums.length; y++){
    if(fibNums[y] % 2 != 0)
    sum+=fibNums[y];
  }

  //console.log(fibNums);
return(sum);
}

sumFibs(1);
sumFibs(1000);
sumFibs(4);
