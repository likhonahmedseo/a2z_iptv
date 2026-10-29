const fs = require('fs');
const html = fs.readFileSync('live_page.html', 'utf8');

const cssLinks = html.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi) || [];
console.log('CSS Links count:', cssLinks.length);
cssLinks.forEach(link => console.log(link));
