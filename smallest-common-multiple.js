function smallestCommons(arr) {
  let numsBtwn = [];
  let smallest;
  let greatest;
  let scm = null;
  let counter = 0;
  
  arr[0] < arr[1] ? smallest = arr[0]   : smallest = arr[1];
    arr[0] > arr[1] ? greatest = arr[0]   : greatest = arr[1];
  

  // find nums between
  for(let k = smallest; k <= greatest; k++){
    numsBtwn.push(k);
  }

  // find smallest common multiple
  for(let l = smallest; counter < numsBtwn.length; l++){
    
     counter = 0;
    for(let x = 0; x < numsBtwn.length; x++){
       
        if(l%numsBtwn[x]==0){
          counter++;
          //console.log(numsBtwn[x], l, counter );
          
        } 
        if(counter == numsBtwn.length){
          console.log(l, numsBtwn.length);
          return l;
        }
        
 
   }
 }


  console.log(numsBtwn);
 
}


smallestCommons([2,10]);
