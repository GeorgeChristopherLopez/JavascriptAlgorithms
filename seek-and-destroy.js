function destroyer(arr) {
  // Remove all the values

for(let i = 1; i < arguments.length; i++){
arguments[0] = arguments[0].filter(el => el != arguments[i]);
}
return(arguments[0]);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
