function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.forEach(el=>{
    if(!arr2.includes(el)){
      newArr.push(el);
    }
  })
  arr2.forEach(el=>{
    if(!arr1.includes(el)){
      newArr.push(el);
    }
  })
  return(newArr);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
