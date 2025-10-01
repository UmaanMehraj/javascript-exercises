const fibonacci = function (terms) {
    let count
    if (typeof terms != 'number') {
        count = parseInt(terms)
    }
    else {
        count = terms
    }

    if (count < 0) return 'OOPS'
    else if (count === 0) return 0

    let next = 1
    let prev = 0

    for (let i = 2; i <= count; i++) {
        let current = next + prev
        prev = next
        next = current
    }

    return next
};

// Do not edit below this line
module.exports = fibonacci;
