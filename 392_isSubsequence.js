// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some 
// (can be none) of the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) 
{
     // instatiate pointer that will traverse
     // both strings.
    
    let i = 0;
    let j = 0;
    
     // while neither one of our pointers exceed
     // the length of the strings they are
     // overseeing
    
    while( j < t.length && i < s.length) 
    {
         // if s at the i index is equal to the 
         // j index of t, we want to incriment the 
         // value of i.  If not, we want to continue
         // to check t to see if the value for which 
         // we are searching exists in the order we 
         // need
        
        if(s[i] === t[j]) {
            i++;
        }
        j++;        
    }
    
     // if s is a subsequence of t, the length of s should
     // be equal to the whole number of i being that i will
     // only increment if s is found inside of t in the exact
     // order that it appears as in s
    
    return i === s.length
};