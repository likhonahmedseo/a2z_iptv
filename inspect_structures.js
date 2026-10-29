const fs = require('fs');

// Check buy-iptv-subscription-in-italy.html
if (fs.existsSync('buy-iptv-subscription-in-italy.html')) {
  const italy = fs.readFileSync('buy-iptv-subscription-in-italy.html', 'utf8');
  console.log('Italy length:', italy.length);
  console.log('Italy head sample:', italy.slice(0, 500));
}

// Let's inspect newyorklimo_airport_sample.html header, footer, assets
const limo = fs.readFileSync('newyorklimo_airport_sample.html', 'utf8');
console.log('Limo length:', limo.length);
