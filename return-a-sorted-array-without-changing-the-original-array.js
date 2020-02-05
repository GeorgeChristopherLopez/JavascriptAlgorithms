var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line

let res = Array.from(arr);

return(res.sort());
  // Add your code above this line
}
nonMutatingSort(globalArray);
