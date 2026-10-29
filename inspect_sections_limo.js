const fs = require('fs');
const html = fs.readFileSync('newyorklimo_airport_sample.html', 'utf8');

// Find headings
const h1s = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi);
console.log('H1s:', h1s);

const h2s = html.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi);
console.log('H2s count:', h2s?.length);
h2s?.slice(0, 10).forEach(h => console.log('  ', h.replace(/<[^>]+>/g, '').trim()));

// Let's see how sections are styled
const sections = html.match(/<section[^>]*>[\s\S]*?<\/section>/gi);
console.log('Sections count:', sections?.length);

// Let's inspect the main content structure
const cheerio = null; // let's see if cheerio or jsdom is installed
