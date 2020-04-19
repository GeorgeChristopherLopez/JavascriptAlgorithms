function convertToRoman(num) {
let res = "";

 while(num >= 1000){
    res+="M";
    num-=1000;
  }




  while(num >= 500){
     if(num >= 900){
       res+="CM";
       num-=900;
     } else {
    res+="D";
    num-=500;

     }
  
  }

  while(num >= 100){
      if(num >= 400){
       res+="CD";
       num-=400;
     } else {
   res+="C";
    num-=100;

     }
  
  }
  while(num >= 50){
     if(num >= 90){
       res+="XC";
       num-=90;
     } else {
  res+="L";
    num-=50;

     }
    
  }
  

  while(num >= 10){
     if(num >= 40){
       res+="XL";
       num-=40;
     } else {
   res+="X";
    num-=10;

     }
   
  }

   while(num >= 5){
     if(num == 9){
       res+="IX";
       num-=9;
     } else {
    res+="V";
    num-=5;

     }

  }

  while(num >= 1){
      if(num == 4){
       res+="IV";
       num-=4;
     } else {
    res+="I";
    num-=1;

     }
    
  }

console.log(num,res);
return res;
}
convertToRoman(83);
