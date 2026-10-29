const fs = require('fs');
for (const f of fs.readdirSync('.').filter(x => x.endsWith('.html'))) {
  const s = fs.readFileSync(f, 'utf8');
  const paras = [...s.matchAll(/<p\b[^>]*>[\s\S]*?<\/p>/gi)].map(m => m[0].replace(/\s+/g, ' '));
  const hits = paras.filter(p => /connection|capacity|package|server/i.test(p));
  if (hits.length) console.log('\n' + f + '\n' + hits.join('\n'));
}
