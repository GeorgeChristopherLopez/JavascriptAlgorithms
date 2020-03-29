function steamrollArray(arr) {
  let res = [];
  let obj = {};
  console.log(res.length,obj.length)
  if(arr.length >0)
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length ){
for(let j = 0; j< arr[i].length; j++){
       
        if(arr[i][j].length)
          for(let k = 0; k< arr[i][j].length; k++){
            if(arr[i][j][k].length)
             for(let l = 0; l< arr[i][j][k].length; l++)
            
             res.push(arr[i][j][k][l])
            else
            res.push(arr[i][j][k]);
          } 
        else
          res.push(arr[i][j]);
    }
    }
      
    else
    if(arr[i].length !=0)
    res.push(arr[i]);
  }
 console.log(res)
  return res;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);