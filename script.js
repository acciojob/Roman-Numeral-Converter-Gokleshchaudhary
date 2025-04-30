function convertToRoman(num) {
    // Step 1: Define the symbols and their values
    const romanSymbols = [
        ['M', 1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];

    let result = '';

    // Step 2: Iterate over the symbols
    for (let i = 0; i < romanSymbols.length; i++) {
        const [symbol, value] = romanSymbols[i];

        // Step 3: While the current value can fit into num
        while (num >= value) {
            result += symbol; // Step 4: Append the symbol
            num -= value; // Subtract the value from num
        }
    }

    return result; // Step 5: Return the final Roman numeral
}