function telephoneCheck(str) {
let hasTenDigits = false;
let hasElevenDigits = false;
let startsWithOne = false;
let hasPermittedCharsOnly = false;
let hasCorrectParentheses = false;

let digits = str.split(/[^0-9]/);
digits = digits.join('');

if(digits.length === 10)
hasTenDigits = true;

if(digits.length === 11)
hasElevenDigits = true;

if(str[0]== 1)
startsWithOne = true;

if(str.includes("(")|| str.includes(")") ){
// 3 nums within parenthesis
let testRegex = /\(\d{3}\)/;
hasCorrectParentheses = testRegex.test(str);
} else if (!str.includes("(")&& !str.includes(")")){
  hasCorrectParentheses = true;
} else {
  hasCorrectParentheses = false;
}

let invalidChars = str.split(/[0-9-() ]/);
invalidChars = invalidChars.join("");
hasPermittedCharsOnly=(invalidChars.length == 0);
  

return((hasTenDigits || hasElevenDigits && startsWithOne) && hasCorrectParentheses && hasPermittedCharsOnly);

}
telephoneCheck("123**&!!asdf#");
telephoneCheck("(555)5(55?)-5555");
telephoneCheck("555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("(275)76227382")