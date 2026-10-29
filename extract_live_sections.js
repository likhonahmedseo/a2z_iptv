const fs = require('fs');
const html = fs.readFileSync('live_page.html', 'utf8');

// Channel section
const chIdx = html.indexOf('services-scroll');
if (chIdx !== -1) {
  console.log('=== CHANNEL SECTION IN live_page.html ===');
  console.log(html.substring(chIdx - 200, chIdx + 1200));
}

// Review section
const rvIdx = html.indexOf('Real Customer Reviews');
if (rvIdx !== -1) {
  console.log('=== REVIEW SECTION IN live_page.html ===');
  console.log(html.substring(rvIdx - 200, rvIdx + 2000));
}
