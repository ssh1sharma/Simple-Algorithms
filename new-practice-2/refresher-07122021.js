///////////////////////////////////////////////
// STRING REVERSAL
function reverseString(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}
//console.log(reverseString("Reverse this string"));

///////////////////////////////////////////////
// PALINDROME CHECK
function palindromeCheck(str) {
  let reverseWord = '';
  for (let i = 0; i < str.length; i++) {
    reverseWord = str[i] + reverseWord;
    if (reverseWord === str) return true;
  }
  return false;
}
//console.log(palindromeCheck("racecar"));
///////////////////////////////////////////////
// PALINDROME CHECK
function integerReversal(num) {
  let convertedToString = num.toString();
  let reverseInt = '';
  for (let i = 0; i < convertedToString.length; i++) {
    reverseInt = convertedToString[i] + reverseInt;
  }
  return reverseInt;
}
//console.log(integerReversal(12304));
///////////////////////////////////////////////
// PALINDROME CHECK
function titleCase(str) {
  let combinedInArray = [];
  let firstUpper = [];
  let otherLetters = [];
  let resultConverted = '';
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    firstUpper.push(str[i][0].toUpperCase());
    otherLetters.push(str[i].slice(1));
    combinedInArray.push(firstUpper[i].concat(otherLetters[i]));
    resultConverted = combinedInArray.join(' ');
  }
  return resultConverted;
}
//console.log(titleCase("make iT TiTlEcaSe"));
///////////////////////////////////////////////
// FINDING MOST OCCURRING CHARACTER
function findOccurringChar(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]] > 0) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }
  return result;
}
//console.log(findOccurringChar("javascript"));

///////////////////////////////////////////////
/* Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined. */
// FIND MISSING CHARACTER
function fearNotLetter(str) {
  let result = '';
  let allChars = "abcdefghijklmnopqrstuvwxyz";
  //let chunkOut = allChars.slice(allChars.indexOf(str[0]), str.length + 1);
  let chunkOut = allChars.substr(allChars.indexOf(str[0]), str.length + 1);
  //console.log(chunkOut + " <--chunkOut");
  //console.log(allChars.indexOf(str[0]) + " <--allChars.indexOf(str[0])");
  for (let i = 0; i < chunkOut.length; i++) {
    if (str.indexOf(chunkOut[i]) === -1) {
      result = chunkOut[i];
      return result;
    }

  }
  return undefined;

}

//fearNotLetter("abce");
console.log(fearNotLetter("abce") + " <--abce"); // d
console.log(fearNotLetter("abcdefghjklmno") + " <--abcdefghjklmno"); // i
console.log(fearNotLetter("stvwx") + " <--stvwx"); // u
console.log(fearNotLetter("cdf") + " <--cdf"); // e
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined

///////////////////////////////////////////////
// FALSY VALUE BOUNCER
function bouncer(arr) {
  let falsy = ["", null, NaN, undefined, false, 0];
  let truthy = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthy.push(arr[i]);
    }
  }
  return truthy;
}
//console.log(bouncer(["", null, NaN, undefined, false, 0, "Hello", 123]));

///////////////////////////////////////////////


///////////////////////////////////////////////
