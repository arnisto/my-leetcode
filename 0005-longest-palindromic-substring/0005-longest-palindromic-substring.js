/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = "";

    // Helper: Starts at middle, grows left and right as long as letters match
    function findPalindrome(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Slice out the matching palindrome string
        return s.slice(left + 1, right);
    }

    // Check every single letter as a potential middle spot
    for (let i = 0; i < s.length; i++) {
        let odd = findPalindrome(i, i);       // e.g. "aba" (middle is 'b')
        let even = findPalindrome(i, i + 1);   // e.g. "abba" (middle is between 'b' and 'b')

        if (odd.length > longest.length) longest = odd;
        if (even.length > longest.length) longest = even;
    }

    return longest;
};