const romanSymbols = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
];
function convertToRoman(num) {
    let result = '';
    
    for (let i = 0; i < romanSymbols.length; i++) {
        while (num >= romanSymbols[i][1]) {
            result += romanSymbols[i][0];
            num -= romanSymbols[i][1];
        }
    }
    
    return result;
}
console.log(convertToRoman(14));  // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII