/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let memObj = {};
    return function(...args) {
        const keey = JSON.stringify(args);
        if(keey in memObj) return memObj[keey] ;
        else{
            const val = fn(...args);
            memObj[keey] = val;
            return val
        }
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */