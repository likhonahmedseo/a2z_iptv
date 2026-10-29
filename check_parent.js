const fs = require('fs');
const html = fs.readFileSync('live_page.html', 'utf8');

console.log('Includes a2z-elementor-fragment:', html.includes('a2z-elementor-fragment'));

// Let's check how the live page embeds its content
const elementorMatches = html.match(/class=["'][^"']*elementor[^"']*["']/gi) || [];
console.log('Elementor classes count:', elementorMatches.length);
if (elementorMatches.length > 0) {
  console.log('Sample Elementor classes:', elementorMatches.slice(0, 5));
}

// Where does services-scroll appear in live_page.html? Let's check parent tags:
const idx = html.indexOf('services-scroll');
if (idx !== -1) {
  console.log('Context around services-scroll (500 chars before):');
  console.log(html.substring(idx - 500, idx));
}
