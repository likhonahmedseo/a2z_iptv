const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Find setupServicesLoop and review carousel in index.html
const sIdx = indexHtml.indexOf('setupServicesLoop');
console.log('--- setupServicesLoop in index.html ---');
console.log(indexHtml.substring(sIdx - 50, sIdx + 1200));

const rIdx = indexHtml.indexOf('initReviewCarousel');
console.log('\n--- initReviewCarousel in index.html ---');
console.log(indexHtml.substring(rIdx - 50, rIdx + 2000));
