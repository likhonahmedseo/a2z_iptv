const fs = require('fs');
const js = fs.readFileSync('combined_litespeed.js', 'utf8');

const idx = js.indexOf('setupChannelSlider');
console.log('setupChannelSlider index:', idx);
if (idx !== -1) {
  console.log(js.substring(Math.max(0, idx - 200), Math.min(js.length, idx + 1500)));
}
