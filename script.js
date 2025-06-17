function convertToRoman(num) {
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = '';

    // Loop through the symbols
    for (let i = 0; i < romanSymbols.length; i++) {
        const [symbol, value] = romanSymbols[i];
        while (num >= value) {
            result += symbol; // Append the symbol
            num -= value;     // Subtract the value from num
        }
    }

    return result; // Return the final Roman numeral
}

document.getElementById('convertButton').addEventListener('click', function() {
    const num = parseInt(document.getElementById('numberInput').value);
    if (num < 1 || num > 100000) {
        document.getElementById('result').innerText = "Please enter a number between 1 and 100000.";
    } else {
        const romanNumeral = convertToRoman(num);
        document.getElementById('result').innerText = romanNumeral;
    }
});