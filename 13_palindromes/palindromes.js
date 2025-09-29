const palindromes = function (str) {
    const alphanum = "abcdefghijklmnopqrstuvwxyz0123456789"

    const cleanedString = str
        .toLowerCase()
        .split('')
        .filter(char => alphanum.includes(char))
        .join('')

    const revStr = cleanedString.split('').reverse().join('')

    return cleanedString === revStr
};

// Do not edit below this line
module.exports = palindromes;
