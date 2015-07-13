// Define a function called sum that takes two numbers as arguments and returns their sum.
function sum(a,b){return a + b;}
// Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.
function isEqual(a,b){
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
// Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.
function discountPercentage(original, discount){
  discountPer = (original - (original - discount)) / original;
  if (discountPer < .01 || discountPer > 1 ){
    return "Warning! The discount is either more than 100% or less than 1%";
  } else{
    return (discountPer * 100) + "%";
  }
}
// Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual work is separated by only one space.
function stringCapitalize(stringIn){
  var stringOut = "";
  for (var i = 0; i < stringIn.length; i++) {
    if (stringIn.charAt(i-1) === " "){
      stringOut += stringIn.charAt(i).toUpperCase();
    }else{
      stringOut += stringIn.charAt(i);
    }
  }
  return stringOut;
}
// Define a function )called evenNumbers that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.

function evenNumbers() {
  var result = "";
  var int = Math.random();
  int *= 100;
  for (var i = 0; i <= int ; i++) {
    if (i % 2 === 0){
      result += (i + " ");
    }
  }
  return result;
}
// Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.
function isDivisible(a,b) {
  if(a % b === 0){
    return true;
  } else {
    return false;
  }
  // body...
}
// Bonus: Write a function called oddNumbers that takes a random integer, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.
console.log(sum(5,2));
console.log(isEqual(1,2));
console.log(discountPercentage(100,20));
console.log(stringCapitalize("This is also a sentence"));
console.log(evenNumbers());
console.log(isDivisible(2,4));
