const fs = require('fs');
const html = fs.readFileSync('live_page.html', 'utf8');

const fragStart = html.indexOf('a2z-elementor-fragment');
console.log('fragStart:', fragStart);

// Let's see style tags inside or near it
// Let's find all <style> tags in live_page.html
const styleMatches = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
console.log('Total style tags:', styleMatches.length);
styleMatches.forEach((s, idx) => {
  const content = s[1];
  console.log(`Style ${idx} length: ${content.length}, has servicesSlide: ${content.includes('servicesSlide')}, has review-carousel: ${content.includes('review-carousel')}`);
});

// Let's find all <script> tags inside or after the fragment
const scriptsAfterFrag = html.substring(fragStart).match(/<script[\s\S]*?<\/script>/gi) || [];
console.log('Scripts after fragStart:', scriptsAfterFrag.length);
scriptsAfterFrag.forEach((s, idx) => {
  console.log(`Script after frag [${idx}]: length ${s.length}`);
  console.log(s.substring(0, 300));
});
