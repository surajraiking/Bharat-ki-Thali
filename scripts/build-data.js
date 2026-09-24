const fs = require('fs');
const path = require('path');

// Read files from original_repo
const files = [
  'breakfastDishes.ts',
  'curryDalDishes.ts',
  'mainCourseDishes.ts',
  'grainsAndSnacksDishes.ts',
  'dessertsAndDrinksDishes.ts',
  'moreRegionalDishes.ts'
];

let rawDishesText = '';
files.forEach(f => {
  const c = fs.readFileSync(path.join(__dirname, '../original_repo', f), 'utf8');
  rawDishesText += '\n' + c;
});

console.log('Read original dish files, raw length:', rawDishesText.length);
