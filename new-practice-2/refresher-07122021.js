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
    if(reverseWord === str) return true;
  }
  return false;
}
console.log(palindromeCheck("racecar"));
///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////


///////////////////////////////////////////////