function add(x) {
  // Add your code below this line
const curried = x => y => z => x + y + z;


return curried(x);


  // Add your code above this line
}
add(10)(20)(30);
