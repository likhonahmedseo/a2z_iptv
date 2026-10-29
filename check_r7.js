const fs = require('fs');

const redesign = fs.readFileSync('homepage_redesign.html', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const r7 = ['James Richardson', 'Omar Malik', 'Lucas Carter', 'Nadia Ahmed', 'Adrian Roberts', 'Hassan Mahmoud', 'Regional Reseller'];

r7.forEach(name => {
  console.log(`In index.html: "${name}"?`, indexHtml.includes(name));
});
