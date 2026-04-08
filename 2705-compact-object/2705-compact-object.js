/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(typeof obj !== "object" || obj === null) return obj;
    if(Array.isArray(obj)) return obj.map((ele)=>typeof ele === "object" || Array.isArray(ele) ? compactObject(ele) :ele).filter((ele)=>  !!ele );
    Object.keys(obj||{}).forEach((key)=>{
        if(!obj[key]) {
            delete obj[key];
        }else{
           obj[key] = compactObject(obj[key]);
        }
    })
    return obj
    };