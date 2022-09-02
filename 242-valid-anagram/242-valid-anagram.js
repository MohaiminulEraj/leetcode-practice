/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const countS = {};
    const countT = {};
    for(let i=0; i < s.length; i++){
        countS[s[i]] = countS[s[i]] + 1 || 1;
        countT[t[i]] = countT[t[i]] + 1 || 1;
    }
    for(const c in countS){
        if(countS[c] !== countT[c]){
            return false;
        }
    }
    return true;
};