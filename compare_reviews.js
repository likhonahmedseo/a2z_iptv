const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const redesignHtml = fs.readFileSync('homepage_redesign.html', 'utf8');

const getRevSection = (html) => {
  const idx = html.indexOf('Real Customer Reviews');
  if (idx === -1) return '';
  return html.substring(idx - 100, idx + 1000);
};

console.log('=== INDEX.HTML REVIEW SECTION ===');
console.log(getRevSection(indexHtml));

console.log('=== HOMEPAGE_REDESIGN.HTML REVIEW SECTION ===');
console.log(getRevSection(redesignHtml));
