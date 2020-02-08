function rangeOfNumbers(startNum, endNum) {

  if (startNum > endNum) {
    return [];
  } else {
    const numArray = rangeOfNumbers(startNum+1, endNum);
    numArray.unshift(startNum);
    console.log(numArray);
    return numArray;
  }

};
console.log(rangeOfNumbers(5,10)); // [ 5, 6, 7, 8, 9, 10 ]
