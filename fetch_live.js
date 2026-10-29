const https = require('https');
const fs = require('fs');

https.get('https://a2ziptv.net/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('HTML Length:', data.length);
    fs.writeFileSync('live_page.html', data, 'utf8');
    console.log('Saved live_page.html');
  });
}).on('error', err => {
  console.error('Fetch error:', err.message);
});
