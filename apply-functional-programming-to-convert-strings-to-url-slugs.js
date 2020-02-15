// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {

title= title.toLowerCase();
title = title.split(" ");
title = title.filter(el=>{
    return el;
});
title = title.join("-");

console.log(title);
return title;
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
urlSlug(" Winter Is  Coming");