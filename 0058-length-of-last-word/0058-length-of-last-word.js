/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(" ").filter((ele)=>ele);
    console.log(words)
    const lastone = words.at(-1);
    return lastone?.length || 0;
};