function sumAll(arr) {
 let sum = 0;

  if(arr[1]> arr[0]){
  for(let i = arr[0]; i <= arr[1]; i++)
        sum += i;
       
  } else {
  for(let i = arr[1]; i <= arr[0]; i++){
      sum += i;
    }
  }
return sum;

}
sumAll([1, 4]);
