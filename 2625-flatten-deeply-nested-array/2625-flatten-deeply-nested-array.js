/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    
    if(n === 0 ) return arr;
    let res = [];
    arr.forEach((ele)=>{
        if(Array.isArray(ele)){
            const elements =flat(ele,n-1)
           res.push(...elements)
        }else{
            res.push(ele)
        }
    })

    return res
};

