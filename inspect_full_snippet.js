const fs = require('fs');
const js = fs.readFileSync('combined_litespeed.js', 'utf8');

const idx = js.indexOf('setupChannelSlider');
console.log(js.substring(idx, idx + 3500));
