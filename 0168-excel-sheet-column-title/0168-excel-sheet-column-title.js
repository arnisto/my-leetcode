/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = "";
    
    while (columnNumber > 0) {
        // Adjust for 1-based indexing
        columnNumber--;
        
        // Find the character for the current least significant digit
        let remainder = columnNumber % 26;
        result = String.fromCharCode(65 + remainder) + result;
        
        // Move to the next digit
        columnNumber = Math.floor(columnNumber / 26);
    }
    
    return result;
};