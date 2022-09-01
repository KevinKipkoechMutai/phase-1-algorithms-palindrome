function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse().join("");
  return word == reversedWord;
}

/* 
  Add your pseudocode here
  create an argument for the function (word)
  declare a variable reversedWord and attach split, reverse, and join methods
  compare the argument to the variable and return true or false depending on the feedback
*/

/*
  Add written explanation of your solution here
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
