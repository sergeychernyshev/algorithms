/*
Palindrome Algorithm
---
Take the input word string, and output an array of the letters.
reverse this array and compare it to the returned original array.
If they are equal, then the word is a palindrome.
*/

let word = "hello";
let word2 = "mom";
let word3 = "palindrome";
let word4 = "noon";

function isPalindrome(input) {
    let chopped = input.split("");
    let reversed = chopped.reverse();
    let reversedstring = reversed.join("");
    // if (reversedstring == input) {
    //     return true;
    // } else {
    //     return false;
    // }
    return reversedstring == input;
}

console.log(isPalindrome(word));
console.log(isPalindrome(word2));
console.log(isPalindrome(word3));
console.log(isPalindrome(word4));