const fs = require('fs');

const redesign = fs.readFileSync('homepage_redesign.html', 'utf8');
const liveCss = fs.readFileSync('combined_litespeed.css', 'utf8');

console.log('--- In homepage_redesign.html ---');
console.log('testimonial-slider-wrap:', redesign.includes('testimonial-slider-wrap'));
console.log('testimonial-track:', redesign.includes('testimonial-track'));
console.log('testimonial-nav:', redesign.includes('testimonial-nav'));

// Check if there are CSS rules for these classes
const checkCss = (str, label) => {
  console.log(`\n--- CSS rules for testimonial in ${label} ---`);
  ['testimonial-slider-wrap', 'testimonial-track', 'testimonial-nav'].forEach(cls => {
    const idx = str.indexOf(cls);
    if (idx !== -1) {
      console.log(`Found ${cls} at ${idx}:`, str.substring(idx - 30, idx + 100).replace(/\s+/g, ' '));
    } else {
      console.log(`NOT FOUND: ${cls}`);
    }
  });
};

checkCss(redesign, 'homepage_redesign.html');
checkCss(liveCss, 'combined_litespeed.css');
