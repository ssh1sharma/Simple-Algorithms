///////////////////////////////////////////////
//....... STRING REVERSAL ....................
function reverseString(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}
//console.log(reverseString("Reverse This"))
///////////////////////////////////////////////
///////////////////////////////////////////////
//....... STRING REVERSAL ....................
function palindromeCheck(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
    if (str === reversed) {
      return true;
    }
  }
  return false;
}
//console.log(palindromeCheck("racecar"))
///////////////////////////////////////////////
///////////////////////////////////////////////
//....... INTEGER REVERSAL ....................
function integerReversal(num) {
  let splitted = num.toString();
  let reversed = '';
  for (let i = 0; i < splitted.length; i++) {
    reversed = splitted[i] + reversed;
    reversed = parseInt(reversed);
  }
  return reversed;
}
//console.log(integerReversal(123))
///////////////////////////////////////////////

///////////////////////////////////////////////
//....... TITLE CASE ....................
function titleCase(str) {
  let allLower = str.toLowerCase();
  let splitted = allLower.split(' ');
  //console.log(splitted);
  let result = '';
  let firstUpper = '';
  let otherCharacters = '';
  for (let i = 0; i < splitted.length; i++) {
    firstUpper = splitted[i][0].toUpperCase();
    //console.log(firstUpper);
    otherCharacters = splitted[i].slice(1);
    result += firstUpper + otherCharacters + ' ';
  }
  return result;
}
// titleCase("Make this sentence a title cased!");
//console.log(titleCase("Make this sentence a title cased!"));
///////////////////////////////////////////////
///////////////////////////////////////////////
//....... MAX OCCURRING CHARACTER ....................
function fizzBuzz(num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    if (num[i] % 3 === 0) {
      console.log(num[i]);
      result = "Fizz";
    } else if (num[i] % 5 === 0) {
      result = "Buzz";
    }
    //console.log(i);
    //console.log(result);

  }
  console.log(result);
  return result;
}
console.log(fizzBuzz(17));
    ///////////////////////////////////////////////
//   if (num[num[i]] % 3 === 0 && num[num[i]] % 5 === 0) {
//  result = "FizzBuzz";
//} else