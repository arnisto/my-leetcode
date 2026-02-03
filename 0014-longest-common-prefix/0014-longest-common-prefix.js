/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // init
    const firstWord = strs[0];

    let longestPrefix = "";
    // 2 initial edge cases no strings or one is an empty string 
    if (strs.length === 0 || "" in strs) return "";
    if (strs.length === 1) return strs[0]

    // search one word it should be in each word so map only one
    for (let i = 0; i < firstWord.length; i++) {
        let prefix = firstWord.slice(0, i + 1);
        // verify is all strs contain the prefix or not
        let allStrsContainThePrefix = true
        for (let j = 1; j < strs.length; j++) {
            if (!(strs[j].slice(0, i + 1) === prefix)) {
                allStrsContainThePrefix = false
            }
        }
        if (allStrsContainThePrefix) {
            if (longestPrefix.length < prefix.length) {
                longestPrefix = prefix;
            }
        }


    }

    return longestPrefix
};