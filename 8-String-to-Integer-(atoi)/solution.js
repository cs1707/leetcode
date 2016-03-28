/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var INT_MAX = 2147483647
    var INT_MIN = -2147483648
    var isNegative = false
    var r = 0
    
    for(var i = 0; /\s/.test(str[i]); i++) {
    }

    if(str[i] === '-' || str[i] === '+') {
        isNegative = str[i] === '-'
        i++
    }
    while(/\d/.test(str[i])) {
        var digit = +str[i]
        /*
            检查溢出
            r * 10 + digit > INT_MAX    => r > (INT_MAX - digit) / 10
            -(r * 10 + digit) < INT_MIN    => -r < (INT_MIN + digit) / 10    
        */
        if(isNegative) {
            if(-r < (INT_MIN + digit) / 10) {
                return INT_MIN
            }
        } else {
            if(r > (INT_MAX - digit) / 10) {
                return INT_MAX
            }
        }
        r = r * 10 + digit
        i++
    }
    return isNegative ? -r : r
};