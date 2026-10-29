const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('homepage_redesign.html', 'utf8');

// Check for any && in the file
const ampersands = (html.match(/&&/g) || []).length;
console.log('Total "&&" in homepage_redesign.html:', ampersands);

// Extract the script tag
const scriptMatch = html.match(/<script[\s\S]*?<\/script>/i);
if (!scriptMatch) {
  console.error('No script tag found!');
  process.exit(1);
}

const scriptCode = scriptMatch[0].replace(/<\/?script[^>]*>/gi, '');
console.log('Script code length:', scriptCode.length);

try {
  new vm.Script(scriptCode);
  console.log('SUCCESS: Script parsed with ZERO syntax errors in standard JS!');
} catch (e) {
  console.error('FAIL in standard JS:', e);
}

// Simulate WordPress texturizing '&' -> '&#038;'
const wpSimulated = scriptCode.replace(/&/g, '&#038;');
try {
  new vm.Script(wpSimulated);
  console.log('SUCCESS: Script parsed with ZERO syntax errors even with WordPress texturize simulation!');
} catch (e) {
  console.error('FAIL in WordPress simulation:', e);
}
