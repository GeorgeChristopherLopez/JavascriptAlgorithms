function checkPositive(arr) {
  // Add your code below this line

var check;
arr.every(function(currentValue) {
  return check = currentValue > 0;
});
return check;

  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
