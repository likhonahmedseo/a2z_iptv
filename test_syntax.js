const fs = require('fs');
const vm = require('vm');

const js = fs.readFileSync('combined_litespeed.js', 'utf8');

try {
  new vm.Script(js);
  console.log('Script parsed successfully!');
} catch (e) {
  console.error('JS Syntax Error caught!');
  console.error(e.message);
  console.error(e.stack);
}
