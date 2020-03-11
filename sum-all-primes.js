function sumPrimes(num) {
  let sum = 0;
  let prime;
  for(let x = num; x >1; x-- ){
  
    for(let y = x-1; y > 1; y--){
    //   console.log(y);
      prime = true;
      if(x % y==0){
        prime = false;
        break;
      } else {
        prime = true;
        
      }

    }
   // console.log(x,prime);
    if(prime)
    sum+=x;
  }
  return(sum);
}

sumPrimes(10);
