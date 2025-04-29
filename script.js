const romanNumerals = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
];

function convertToRoman(num) {
    if (num === 0) return ''; // Roman numerals do not have a representation for 0
    let result = '';

    // Handle special cases first
    while (num >= 1000) { result += 'M'; num -= 1000; }
    if (num >= 900) { result += 'CM'; num -= 900; }
    if (num >= 500) { result += 'D'; num -= 500; }
    if (num >= 400) { result += 'CD'; num -= 400; }
    while (num >= 100) { result += 'C'; num -= 100; }
    if (num >= 90) { result += 'XC'; num -= 90; }
    if (num >= 50) { result += 'L'; num -= 50; }
    if (num >= 40) { result += 'XL'; num -= 40; }
    while (num >= 10) { result += 'X'; num -= 10; }
    if (num >= 9) { result += 'IX'; num -= 9; }
    if (num >= 5) { result += 'V'; num -= 5; }
    if (num >= 4) { result += 'IV'; num -= 4; }
    while (num >= 1) { result += 'I'; num -= 1; }

    return result;
}

document.getElementById('convertButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput);

    if (isNaN(number)) {
        document.getElementById('result').innerText = 'Please enter a valid number.';
    } else if (number < 0 || number > 100000) {
        document.getElementById('result').innerText = 'Please enter a number between 0 and 100000.';
    } else {
        const romanNumeral = convertToRoman(number);
        // Replace 'I' with vertical 'I'
        document.getElementById('result').innerHTML = `Roman Numeral: ${romanNumeral.replace(/I/g, '<span class="vertical-i">I</span>')}`;
    }
});