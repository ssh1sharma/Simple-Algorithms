//* ######################################## */

function isEqual(a, b) {
  return a === b; // Returns true or false
}
//console.log(isEqual(2, 2));

//* ######################################## */

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

//* ######################################## */
// Setup
function abTest(a, b) {
if(a<0 || b<0) {
  return undefined;
}
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(0,2));

//* ######################################## */
function testing(num) {
  let sum = 0;
  if(num>0) {
    sum = num + testing(num-1);
  }
  return sum;
}
console.log(testing(5));


//* ######################################## */


//* ######################################## */


//* ######################################## */
