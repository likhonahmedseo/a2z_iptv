const fs = require('fs');
const html = fs.readFileSync('newyorklimo_airport_sample.html', 'utf8');

console.log('Title:', html.match(/<title>(.*?)<\/title>/i)?.[1]);

// Let's see what theme or builder it uses
const isElementor = html.includes('elementor');
console.log('Is Elementor:', isElementor);

// Check body classes
const bodyMatch = html.match(/<body[^>]*class="([^"]*)"/i);
console.log('Body classes:', bodyMatch ? bodyMatch[1].slice(0, 200) : 'none');

// Check header tag or nav
const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
console.log('Header length:', headerMatch ? headerMatch[0].length : 0);

// Check footer tag
const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
console.log('Footer length:', footerMatch ? footerMatch[0].length : 0);

// Let's see main content wrapper
const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
console.log('Main length:', mainMatch ? mainMatch[0].length : 0);
