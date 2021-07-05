let percentage;
let checkNumber;
let tipAmount
let sum;
const MAX_PERCENT = 100;
const ROUND = 2;
checkNumber = Number(prompt('Input check number', ''));
percentage = Number(prompt('Input tip', ''));
checkNumber > 0 ? checkNumber : alert('Invalid input data');
percentage > 0 && percentage < MAX_PERCENT ? percentage : alert('Invalid input data');
tipAmount = checkNumber / MAX_PERCENT * percentage;
sum = tipAmount + checkNumber;
alert('Check number:' + checkNumber.toFixed(ROUND) + '\n' +
    'Tip:' + percentage.toFixed(ROUND) + '\n' +
    'Tip amount' + tipAmount.toFixed(ROUND) + '\n' +
    'Total sum to pay:' + sum.toFixed(ROUND))