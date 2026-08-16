/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;

    let left = 1;
    let right = Math.floor(x / 2);
    let ans = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            ans = mid;        // Store mid as the best integer root so far
            left = mid + 1;   // Try finding a larger valid integer
        } else {
            right = mid - 1;  // Shrink the search range
        }
    }

    return ans;
};