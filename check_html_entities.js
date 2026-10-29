const fs = require('fs');
const js = fs.readFileSync('combined_litespeed.js', 'utf8');

const matches = [...js.matchAll(/&#038;/g)];
console.log('Total &#038; occurrences in combined_litespeed.js:', matches.length);
matches.forEach(m => {
  const start = Math.max(0, m.index - 50);
  const end = Math.min(js.length, m.index + 50);
  console.log('Occurrence:', js.substring(start, end).replace(/\n/g, ' '));
});
