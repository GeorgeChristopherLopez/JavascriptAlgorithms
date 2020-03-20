function dropElements(arr, func) {
  let res =[];
  let check = false;
  for(let x = 0; x < arr.length; x++){
 if(!check)
   if(func(arr[x]))
    check = true;
  
  if(check)
  res.push(arr[x])

  }
  console.log(res);
  return res;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;})
