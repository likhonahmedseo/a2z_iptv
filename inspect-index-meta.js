const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
for (const marker of ['<title>', 'description', 'application/ld+json', '<main>', '<!-- ================= HERO']) {
  const index = html.indexOf(marker);
  console.log(`--- ${marker} @ ${index} ---`);
  if (index !== -1) console.log(html.slice(Math.max(0, index - 300), index + 900));
}
