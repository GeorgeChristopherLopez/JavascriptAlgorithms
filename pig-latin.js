function translatePigLatin(str) {
  let res = '';
  let fLet = str[0];
  if(/[aeiou]/.test(fLet)){
   str = str+"way";
  return(str);   
  } else if (/[aeiou]/.test(str)==false){
    str = str+"ay";
  return(str);  
  } else {
    for (let i = 0; /[aeiou]/.test(str[i])==false;i++ ){
  res = str.slice(i+1,str.length) + str.slice(0, i+1) + "ay";
 
    }
    console.log(res);
  return res;
  }
  
}

translatePigLatin("consonant");
