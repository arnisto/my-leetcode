/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {

    const isPalindrome = (str) => {
        console.log(str)
        let right  = str.length - 1;
        let left = 0;

        while(left < right){
            if(str[left] !== str[right]){
                return false
            }
            left++;
            right--;
        }

        return true
    }
    for(let j = 2 ; j <= n - 2; j++){
        if(!isPalindrome(n.toString(j))){
            return false;
        }
    }
    return true
};