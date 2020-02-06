function splitify(str) {
  // Add your code below this line

let other = str.split(".").join().split("-").join().split(",").join().split(" ").join().split(",");

return(other);
  // Add your code above this line
}
splitify("This.is.a-sentence");
splitify("Hello World,I-am code");
splitify("Earth-is-our home");