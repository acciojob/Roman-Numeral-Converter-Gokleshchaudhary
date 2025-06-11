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
    // function implementation
}
document.getElementById('convertButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput);
    const romanNumeral = convertToRoman(number); // This should come after the function is defined
});
console.log('Function is being called');
const romanNumeral = convertToRoman(number);
