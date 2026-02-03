/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const objConv = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
        IV:4,
        IX:9,
        XL:40,
        XC:90,
        CD:400,
        CM:900
    }
    const step = {
        I:1,
        V:1,
        X:1,
        L:1,
        C:1,
        D:1,
        M:1,
        IV:2,
        IX:2,
        XL:2,
        XC:2,
        CD:2,
        CM:2
    }
    let idx = 0;
    let total = 0;
    while(idx<s.length){
        const towStr = s[idx]+s[idx+1]
        if(towStr in objConv){
            total+= objConv[towStr];
            idx+=step[towStr];
        }else{
            total+= objConv[s[idx]];
            idx+=step[s[idx]];
        }
    }
    return total
};