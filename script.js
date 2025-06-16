function convertToRoman(num) {
    const romanNumerals = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];
    
    let result = '';
    
    for (let i = 0; i < romanNumerals.length; i++) {
        const [symbol, value] = romanNumerals[i];
        
        // While the number is greater than or equal to the value
        while (num >= value) {
            result += symbol; // Append the symbol to the result
            num -= value; // Subtract the value from num
        }
    }
    
    return result; // Return the final Roman numeral
}

// Example usage:
console.log(convertToRoman(14));   // Output: XIV
console.log(convertToRoman(798));