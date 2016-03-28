/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <=1 || numRows >= s.length) {
        return s
    }
    
    var arr = []
    
    for (var i = 0; i < numRows; i++) {
        for (var j = i; j < s.length; j += 2 * (numRows - 1)) {
            arr.push(s[j])
            if(i == 0 || i == numRows - 1) {
                continue
            }
            //中间
            var temp = j + (numRows - i - 1) * 2
            if (temp < s.length) {
                arr.push(s[temp])
            }
        }
    }
    return arr.join('')
};
