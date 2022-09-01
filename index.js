function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse().join("");
  return word == reversedWord;
}

/* 
  Add your pseudocode here
  create the function isPalindrome and specify its argument
  declare a new variable, reversedWord, and assign it to the argument acted on by split(), reverse(), and join() methods
  return true only if the argument is loosely equivalent to reversedWord
*/

/*
  Add written explanation of your solution here
  the function takes an argument and assigns it to the reversedWord variable. 
  the input is then split, reversed, and joined using split(), reverse(), and join()
  the resturn function returns a boolean expression. True is the reversedWord loosely matches the input, and false if vice versa
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
