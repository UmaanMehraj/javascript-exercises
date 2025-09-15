const sumAll = function (a, b) {
    let sum = 0;
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    else {
        if (Number.isInteger(a) && Number.isInteger(b)) {
            if (a > b) {
                for (let i = b; i <= a; i++) {
                    sum += i;
                }
            }
            else if (a < b) {
                for (let i = a; i <= b; i++) {
                    sum += i;
                }
            }
        }
        else {
            return "ERROR";
        }

    }
    return sum;

};
console.log(sumAll(1, 2));

// Do not edit below this line
module.exports = sumAll;
