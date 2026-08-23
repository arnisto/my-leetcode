/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let total = [];
    const max = 2**n;
    for(let i =  0; i < max; i++){
        const str = i.toString(2,n).padStart(n, '0');
        const isValid = !str.includes("00");
         if(isValid){
            total.push(str)
         }
    }
    return total
};