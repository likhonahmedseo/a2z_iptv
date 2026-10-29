const https = require('https');
const fs = require('fs');

https.get('https://a2ziptv.net/wp-content/litespeed/css/ea6c08af7b4d2d26d4ce533c0e12126a.css?ver=71678', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('CSS Status:', res.statusCode);
    console.log('CSS Length:', data.length);
    fs.writeFileSync('combined_litespeed.css', data, 'utf8');
    console.log('Saved combined_litespeed.css');
    console.log('Contains services-scroll?', data.includes('services-scroll'));
    console.log('Contains services-track?', data.includes('services-track'));
    console.log('Contains servicesSlide?', data.includes('servicesSlide'));
    console.log('Contains review-carousel?', data.includes('review-carousel'));
  });
}).on('error', err => {
  console.error('Fetch error:', err.message);
});
