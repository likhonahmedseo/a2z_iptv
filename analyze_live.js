const fs = require('fs');

const html = fs.readFileSync('live_page.html', 'utf8');

console.log('--- Search for channel scroll / marquee ---');
const channelMatches = html.match(/<[^>]+(channel|scroll|marquee|logo-track|channel-track|slider|swiper)[^>]*>/gi) || [];
console.log('Total matching tags:', channelMatches.length);
channelMatches.slice(0, 30).forEach(m => console.log(m));

console.log('\n--- Search for review / testimonial in live_page.html ---');
const reviewMatches = html.match(/<[^>]+(review|testimonial)[^>]*>/gi) || [];
console.log('Total review tags:', reviewMatches.length);
reviewMatches.slice(0, 30).forEach(m => console.log(m));

console.log('\n--- Script tags in live_page.html ---');
const scripts = html.match(/<script[\s\S]*?<\/script>/gi) || [];
scripts.forEach((s, idx) => {
  const src = s.match(/src=["'](.*?)["']/i);
  if (src) {
    console.log(`Script [${idx}] external: ${src[1]}`);
  } else {
    console.log(`Script [${idx}] inline (${s.length} chars): ${s.substring(0, 150).replace(/\r?\n/g, ' ')}...`);
  }
});
