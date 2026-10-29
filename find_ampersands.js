const fs = require('fs');

const content = fs.readFileSync('homepage_redesign.html', 'utf8');

// Find all script tags
const scripts = [...content.matchAll(/<script[\s\S]*?<\/script>/gi)];
console.log('Total script tags in homepage_redesign.html:', scripts.length);

scripts.forEach((s, idx) => {
  const code = s[0];
  const ampersands = (code.match(/&&/g) || []).length;
  console.log(`Script ${idx}: length ${code.length}, contains ${ampersands} '&&' operators`);
  if (ampersands > 0) {
    const lines = code.split('\n');
    lines.forEach((line, lineNo) => {
      if (line.includes('&&')) {
        console.log(`  Line ${lineNo}: ${line.trim()}`);
      }
    });
  }
});
