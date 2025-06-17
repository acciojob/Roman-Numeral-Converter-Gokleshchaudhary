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
        
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    
    return result;
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