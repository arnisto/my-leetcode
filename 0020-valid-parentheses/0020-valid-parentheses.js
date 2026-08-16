/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pile = [];
    const inv = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    const lChars = ["[","(","{"]
    for (let i = 0 ; i < s.length ; i++){
         if(lChars.includes(s[i])){
            pile.push(s[i])
         }else{
            if(pile.at(-1) === inv[s[i]]){
                pile.pop()
            }else{
                return false;
            }
         }

    }
    return pile.length === 0
};