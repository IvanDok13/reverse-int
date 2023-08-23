module.exports = function reverse(n) {
    let numString = Math.abs(n) + '';
    let answ = '';
    for (let i = numString.length - 1; i >= 0; i--) {
        answ += numString[i];
    }
    return +answ;
}
