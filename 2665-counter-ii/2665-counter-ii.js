/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let val = init
    const increment = () =>{
        val++
        return val
    };
    const decrement = ( ) =>{
         val--
         return val
    }
    const  reset = () =>{
        val = init
        return val
    }
    return {
        increment,decrement,reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */