function sentensify(str) {
  // Add your code below this line
 /* if(str.includes("-")){
    str = str.split("-");

  }
    if(str.includes(".")){
    str = str.split(".");

  }
*/
  str = str.split(/[,-.]/);
  str = str.join(" ");
  return(str);
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
