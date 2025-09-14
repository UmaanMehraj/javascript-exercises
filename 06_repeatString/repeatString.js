const repeatString = function (str, num) {
    let i = 1;
    let arr = [];
    if (num < 0) return "ERROR";
    else {
        while (i <= num) {
            arr.push(str);
            i++;
        }
    }
    let newStr = arr.join('');
    return newStr;

};

console.log(repeatString('hey', 3));


// Do not edit below this line
module.exports = repeatString;
