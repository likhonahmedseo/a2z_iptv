const fs = require('fs');
const html = fs.readFileSync('live_page.html', 'utf8');

function findSnippet(phrase) {
  const idx = html.indexOf(phrase);
  if (idx === -1) {
    console.log('Phrase NOT FOUND:', phrase);
    return;
  }
  console.log('--- FOUND:', phrase, 'at index', idx, '---');
  const start = Math.max(0, idx - 400);
  const end = Math.min(html.length, idx + 1000);
  console.log(html.substring(start, end));
  console.log('--------------------------------------------------');
}

findSnippet('Real Customer Reviews');
findSnippet('Premium IPTV Channel Lineup');
findSnippet('James Richardson');
