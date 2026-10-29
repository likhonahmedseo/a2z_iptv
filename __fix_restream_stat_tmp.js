const fs = require('fs');
let s = fs.readFileSync('restream.html', 'utf8');
const hits = [...s.matchAll(/.{0,120}(?:1K|50.?1,?000|50.?5,?000).{0,160}/gi)].map(m => m[0].replace(/\s+/g, ' '));
console.log(hits.join('\n'));
s = s.replace(/50[–-]1K/g, '5000+');
fs.writeFileSync('restream.html', s);
