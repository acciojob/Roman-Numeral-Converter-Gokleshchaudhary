function convertToRoman(num) {
  if (num <= 0 || num > 100000) {
    return "Please enter a number between 1 and 100000.";
  }

  const romanMap = [
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
    ['I', 1],
  ];

  let result = '';

  for (let [symbol, value] of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

function handleConvert() {
  const input = document.getElementById("numberInput").value;
  const number = parseInt(input, 10);
  const resultElement = document.getElementById("result");

  if (isNaN(number)) {
    resultElement.textContent = "Please enter a valid number.";
    return;
  }

  const roman = convertToRoman(number);
  resultElement.textContent = `Roman Numeral: ${roman}`;
}
