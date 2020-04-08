function palindrome(str) {
  let forwards = "";

  let backwards = "";

for(let x = 0; x < str.length; x++){

if(/[a-z0-9A-Z]/.test(str[x])) {
(forwards+=str[x].toLowerCase())

}

if(/[a-z0-9A-Z]/.test(str[str.length-x-1])) {
backwards+=str[str.length-x-1].toLowerCase();

}
}

console.log(forwards);
console.log(backwards);
return(forwards === backwards);

}

palindrome("My age is 0, 0 si ega ym.");