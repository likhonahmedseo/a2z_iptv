const fs = require('fs');

function checkFile(filename) {
  if (!fs.existsSync(filename)) return;
  const content = fs.readFileSync(filename, 'utf8');
  console.log(`=== FILE: ${filename} (length: ${content.length}) ===`);
  const keywords = ['channel-row', 'marquee-wrap', 'review-carousel', 'services-scroll', 'channel', 'marquee', 'review-slider-wrap'];
  for (const kw of keywords) {
    const regex = new RegExp(kw, 'gi');
    const count = (content.match(regex) || []).length;
    console.log(`  "${kw}": ${count} occurrences`);
  }
}

checkFile('index.html');
checkFile('homepage_redesign.html');
checkFile('live_page.html');
