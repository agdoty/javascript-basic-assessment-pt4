/////////////
// Num. 7  //////////////////////////////////////////////////////////
// Create a function called objectLooper that will go through the  //
// given object below and change all keys that start with 'm' to   //
// have a value of "no m&m's for you"                              //
/////////////////////////////////////////////////////////////////////
var candies = {
  mAndm: 'delicious',
  kitkat: 'to die for',
  skittles: 'meh',
  marsbars: 'never tried',
  mugrootbeer: 'not candy... but the best'
};

for(var key in candies){
  if(key.charAt(0) === 'm'){
    console.log(this.key + "  hit")
    candies[key] =  "no m&m's for you";
  }
}

/////////////
// Num. 8  //////////////////////////////////////////////////////////
// Using the array below, do the following:                        //

 var colors = ['red', 'blue', 'green', 'yellow'];

// (A) Add the color 'purple' to the end of the array              //
 colors.push('purple');
// (B) Remove 'red' and store it in a variable called colorRed     //
 var colorRed = colors.splice(0,1)[0];
// (C) Add 'pink' to the beginning of the colors array             //
 colors.unshift('pink');
// (D) Leave 'green' in the array, but save it into another        //
// variable called colorGreen                                      //
 var colorGreen = colors.slice(2,3)[0];
/////////////////////////////////////////////////////////////////////
