function pairElement(str) {
  let res = [];
 
  for(let x = 0; x < str.length; x++) {
      switch(str[x]){
        case 'A':
        res.push(["A","T"]);
        break;
        case 'T':
        res.push(["T","A"]);
        break;
        case 'G':
        res.push(["G","C"]);
        break;
        case 'C':
        res.push(["C","G"]);
        break;
      }
  }
  
  

  
 
  return(res);
}

pairElement("GCG");
pairElement("ATCGA");