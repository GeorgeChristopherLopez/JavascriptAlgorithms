function convertHTML(str) {
  // &colon;&rpar;
 let chart = [
      ["&","&amp;"],
      ["<","&lt;"],
      [">","&gt;"],
      ['"',"&quot;"],
      ["'","&apos;"] 
];

let res = str.split("");

for (let x = 0; x < chart.length; x++){
  for(let y = 0; y < res.length; y++){
    if(res[y]==chart[x][0])
    res[y]= chart[x][1]; 
  }
}

res =res.join("");
return(res);
}


;
convertHTML('Stuff in "quotation marks"')