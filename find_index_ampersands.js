const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const scripts = [...content.matchAll(/<script[\s\S]*?<\/script>/gi)];
console.log('Total script tags in index.html:', scripts.length);

scripts.forEach((s, idx) => {
  const code = s[0];
  const ampersands = (code.match(/&&/g) || []).length;
  console.log(`Script ${idx}: length ${code.length}, contains ${ampersands} '&&' operators`);
});
