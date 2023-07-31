// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
// This function should return true if the given string is a palindrome, and false if it isn't.
function checkPalindrome(string) {
    const lowerCasedValues = string.toLowerCase();
    // remove all characters that are not in the range of a-z and 0-9
    const characters = lowerCasedValues.replace(/[^a-z0-9]/g, '');
    // split and join the characters after reversing
    const reversedChars = characters.split('').reverse().join('');
    // now compare the two strings
    return characters === reversedChars;
}

const string = "Able was I ere I saw Elb.!";
console.log(checkPalindrome(string));
  
  

