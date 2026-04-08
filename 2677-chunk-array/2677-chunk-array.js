/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let newChunk = [];
    let res = [];
    for(let i = 0 ; i < arr.length;i++){
        if(newChunk.length === size){
            res.push(newChunk);
            newChunk = [];
        }
        newChunk.push(arr[i])
    }
    if(newChunk.length !== 0){
                    res.push(newChunk);
    }
    return res

};
