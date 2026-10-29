const fs = require('fs');
const css = fs.readFileSync('homepage_redesign.html', 'utf8');

const idx = css.indexOf('.testimonial-track');
console.log(css.substring(idx, idx + 1000));
