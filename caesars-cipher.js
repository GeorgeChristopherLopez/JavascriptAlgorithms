function rot13(str) {
let res = "";
let key = 13;
let j;
let c;
for(let i =0; i < str.length; i++){
for(j = 0,  c = str.charCodeAt(i); j < key; j++){
    if(c == 122){
      c = 97;
    } else if(c == 90) {
      c = 65;
    } else if(c >= 65 && c < 90 || c >=97 && c < 122) {
      c++;
    }
   
  }
  res+= String.fromCharCode(c);
 
}
 console.log(res);
 return res; 
}

rot13("SERR PBQR PNZC");
