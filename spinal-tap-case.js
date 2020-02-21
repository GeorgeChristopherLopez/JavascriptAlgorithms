function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  

   str = str.split(/(?=[A-Z])/);
   str = str.join();
   str = str.split(/[_, ,-]/);
   str = str.join();
   str = str.split(",,");
   str = str.join();
    str = str.split(",");
    str = str.join("-").toLowerCase();
   return(str);
}

spinalCase('This Is Spinal Tap');
spinalCase("AllThe-small Things");
spinalCase("Teletubbies say Eh-oh");
spinalCase("The_Andy_Griffith_Show")