function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var V;
  var R;
  var T; 
   for(let el of arr){
     if(el.avgAlt){
      R = (el.avgAlt + earthRadius);
      V = Math.sqrt(GM/R);
      T = Math.round((2 * Math.PI * R )/V)
     
      el.orbitalPeriod = T;
      delete el.avgAlt;
      

     }

     }
     return(arr);
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
