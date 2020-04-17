var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let nameArr = firstAndLast.split(" ");
  
 


  this.setFirstName = function(firstname) {
    
    nameArr[0] = firstname;
    
  };
  this.setLastName = function(lastname) {
    
    nameArr[1] = lastname;

  };
     this.setFullName = function(firstAndLast) {
  
   nameArr = firstAndLast.split(" ");
  
  };
  this.getFirstName = function() {
  return nameArr[0];
  };
  this.getLastName = function() {
  return nameArr[1];
  };
   this.getFullName = function() {
  return this.getFirstName()+" "+this.getLastName();
  };
 
};

var bob = new Person('Bob Ross');
bob.getFullName();
console.log(Object.keys(bob));