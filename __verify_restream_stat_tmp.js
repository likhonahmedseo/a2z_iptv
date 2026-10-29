const fs = require('fs');
const s = fs.readFileSync('restream.html', 'utf8');
console.log('5000+ stat: ' + s.includes('<p class="text-2xl font-heading font-bold text-white">5000+</p>'));
console.log('old 50-1K removed: ' + !s.includes('50-1K'));
