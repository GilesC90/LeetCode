/**
 * @param {string} s
 * @return {string}
 */

/**
    Runtime: 928 ms, faster than 24.77% of JavaScript online submissions for Longest Palindromic Substring.
    Memory Usage: 49.8 MB, less than 13.80% of JavaScript online submissions for Longest Palindromic Substring.
    Date: 2/3/3033
    Name: Bailey Kau
 */

//Check if a given string is a palindrome
//Also can be achieved using return str = str.split('').reverse().join('');
function isPalindrome(str) {
    for (var i = 0; i < str.length/2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

var longestPalindrome = function(str) {
    //Edge Case of 1 letter or entire string is a palindrome (can led to infinite loops if not checked)
    if (str.length == 1 || isPalindrome(str)) return str;
    let expected = str[0];
    //Need two palindrome strings and two substring booleans because we are checking even-length palindromes, then odd-length palindromes
    let palindrome = "";
    let palindrome2 = "";
    let substring = true;
    let substring2 = true;
    for (var i = 1; i < str.length; i++) {
        x = i - 1;
        y = i + 2;
        //This loop will continue until the substring calculated is not a palindrome
        //Substring loop is for odd-length palindromes (aba, ababa)
        //This is why x and y are 4 spaces apart (substring returns string not including last index)
        while (substring && x > -1) {
            substring = str.substring(x, y);
            substring = isPalindrome(substring);
            if (substring) {
                palindrome = str.substring(x,y);
                x--;
                y++;
            }
        }
        //Reset substring for the next iteration of the loop
        substring = true;
        z = i + 1;
        x = i - 1;
        //This loop will continue until the substring calculated is not a palindrome
        //Substring loop is for even-length palindromes (abba, abccba)
        //This is why x and y are 3 spaces apart (substring returns string not including last index)
        while (substring2 && x > -1) {
            substring2 = str.substring(x, z);
            substring2 = isPalindrome(substring2);
            if (substring2) {
                palindrome2 = str.substring(x,z);
                x--;
                z++;
            }
        }
        //Reset substring2 for next iteration of loop
        substring2 = true;
        //Change our output only if the 'palindrome' string is longer
        if (palindrome.length > expected.length) {
            expected = palindrome;
        }
        if (palindrome2.length > expected.length) {
            expected = palindrome2;
        }
    }
    return expected;
};