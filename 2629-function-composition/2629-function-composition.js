/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        if(functions.length === 0) return x
        let res = x;
        for(let i = 0; i < functions.length; i++){
            res = functions[functions.length-1-i](res)
        }
        return res
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */