/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let indexObj = {};
    let res = [];
    for(let i = 0; i< arr1.length;i++){
        const idx = indexObj[arr1[i].id];
        if(arr1[i].id in indexObj){
            res[idx] = {...(res[idx]||{}),...arr1[i]}
        }else{
            res.push(arr1[i]);
            indexObj[arr1[i].id] = res.length - 1;
        }
    }
      for(let i = 0; i< arr2.length;i++){
        const idx = indexObj[arr2[i].id];
        if(arr2[i].id in indexObj){
            res[idx] = {...(res[idx]||{}),...arr2[i]}
        }else{
            res.push(arr2[i]);
            indexObj[arr2[i].id] = res.length - 1;
        }
    }
    return res.sort((a,b)=>a.id - b.id)
    
};