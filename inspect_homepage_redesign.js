const fs = require('fs');
const html = fs.readFileSync('homepage_redesign.html', 'utf8');

function checkSection(phrase) {
  const idx = html.indexOf(phrase);
  if (idx === -1) {
    console.log('Phrase NOT FOUND:', phrase);
    return;
  }
  console.log('=== FOUND IN homepage_redesign.html:', phrase, '===');
  console.log(html.substring(idx - 100, idx + 1000));
}

checkSection('Real Customer Reviews');
checkSection('services-scroll');
checkSection('setupChannelSlider');
