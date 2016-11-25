 var quest = {

findMinMax: function(arry) {
var max = 0;
var min = arry[0];
   for(var i = 0; i < arry.length; i++) {
     if (arry[i] > max) {
       max = arry[i];
     }
     if (arry[i] < min) {
       min = arry[i];
     }
   }
   if (min === max) {
     return [min];
   } else {
     return [min, max];
   }
}
}
module.exports = quest;