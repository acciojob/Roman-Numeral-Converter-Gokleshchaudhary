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
    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i][1]) {
            result += romanNumerals[i][0];
            num -= romanNumerals[i][1];
        }
    }
    return result;
}

document.getElementById('convertButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput);
    if (number >= 0 && number <= 100000) {
        const romanNumeral = convertToRoman(number);
        document.getElementById('result').innerText = `Roman Numeral: ${romanNumeral}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a number between 0 and 100000.';
    }
});