const fs = require('fs');

const liveHtml = fs.readFileSync('live_page.html', 'utf8');
const redesign = fs.readFileSync('homepage_redesign.html', 'utf8');

console.log('live_page has id="channels":', liveHtml.includes('id="channels"') || liveHtml.includes("id='channels'"));
console.log('redesign has id="channels":', redesign.includes('id="channels"') || redesign.includes("id='channels'"));

// Find the section tag containing services-scroll in both files
const getSectionTag = (html) => {
  const idx = html.indexOf('services-scroll');
  if (idx === -1) return 'NOT FOUND';
  const before = html.substring(Math.max(0, idx - 2000), idx);
  const lastSection = before.lastIndexOf('<section');
  return before.substring(lastSection, lastSection + 250);
};

console.log('Section in live_page.html:');
console.log(getSectionTag(liveHtml));

console.log('Section in homepage_redesign.html:');
console.log(getSectionTag(redesign));
