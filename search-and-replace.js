function myReplace(str, before, after) {
  str = str.split(" ");
  if(/[A-Z]/.test( before[0] )){
   after = after.charAt(0).toUpperCase() + after.slice(1)
    str[str.indexOf(before)]=after; 

  } else {
    str[str.indexOf(before)]=after;
  }
    
  str = str.join(" ");
 return(str);

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");