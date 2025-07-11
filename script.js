const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// ✅ Roman numeral converter function
function convertToRoman(num) {
  if (num <= 0 || num > 100000) {
    return 'Invalid input';
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

  for (const [symbol, value] of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// ✅ Required for Cypress test to detect the function
module.exports = { convertToRoman };

// ✅ API endpoint
app.post('/romanConverter', (req, res) => {
  const { input } = req.body;
  const roman = convertToRoman(input);
  res.json({ result: roman });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
