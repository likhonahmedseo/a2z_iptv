const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const rCards = [...indexHtml.matchAll(/<div class="review-card[^>]*>([\s\S]*?)<\/div>\s*(?=<div class="review-card|<\/div>\s*<\/div>\s*<\/div>)/gi)];
console.log('Total review cards in index.html:', rCards.length);
rCards.slice(0, 10).forEach((c, i) => {
  const authorMatch = c[1].match(/<p class="text-white font-bold[^>]*>(.*?)<\/p>/);
  const author = authorMatch ? authorMatch[1] : 'Unknown';
  console.log(`Review ${i+1}: ${author}`);
});
