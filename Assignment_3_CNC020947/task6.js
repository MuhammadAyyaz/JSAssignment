var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];
delete o[0]
aCities=aCities.slice(0,3)
o=o.slice(1)
count=1

for (var i = 0; i < aCities.length;i++){
 	console.log(count++ + o[i]+" choice is " + aCities[i]);
  }