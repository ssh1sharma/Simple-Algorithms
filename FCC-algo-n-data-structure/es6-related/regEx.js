let givenString = "Hello, 123 World!";
let checkingString = /Hello/;
let result1 = checkingString.test(givenString); // Change this line

//console.log(result1);

//////////////////////
//MATCH LITERAL STRINGS
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);

//console.log(result2);

////////////////////////////////////
//Match a Literal String with Different Possibilities (Use 'or (|) symbol)
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result3 = petRegex.test(petString);
//console.log(result3);

////////////////////////////////////
// Ignore Case While Matching (Use i flag appending to the regEx)
let myString = "freeCodeCamp";
let fccRegex = /FreEcOdeCamP/i;
let result4 = fccRegex.test(myString);
//console.log(result4);

///////////////////////////////////////
// Extract Matches (Note: test() is opposite of match())
// For Example: 'string'.match(/regex/); // /regex/.test('string');
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result5 = extractStr.match(codingRegex); // Change this line
//console.log(result5);

/////////////////////////////////////////
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result6 = twinkleStar.match(starRegex); // Change this line
//console.log(result6 + " <-- Result");

///////////////////////////////////////////
// Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result7 = unRegex.test(exampleStr);

//console.log(result7);

////////////////////////////////////////////////
// Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result8 = quoteSample.match(vowelRegex); // Change this line
console.log(result8);

//////////////////////////////////////////////