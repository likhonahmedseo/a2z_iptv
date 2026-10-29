const fs = require('fs');

function inspectServicesScroll(filename) {
  if (!fs.existsSync(filename)) return;
  const content = fs.readFileSync(filename, 'utf8');
  console.log(`\n================== ${filename} ==================`);
  let pos = 0;
  while ((pos = content.indexOf('services-scroll', pos)) !== -1) {
    const start = Math.max(0, pos - 150);
    const end = Math.min(content.length, pos + 300);
    console.log(`[pos ${pos}]:\n` + content.substring(start, end).replace(/\s+/g, ' ') + '\n---');
    pos += 'services-scroll'.length;
  }
}

inspectServicesScroll('live_page.html');
inspectServicesScroll('homepage_redesign.html');
inspectServicesScroll('index.html');
