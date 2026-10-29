const https = require('https');
const fs = require('fs');

https.get('https://a2ziptv.net/wp-content/litespeed/js/800647932111e4c26b91f945dcb7595a.js?ver=71678', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('JS Status:', res.statusCode);
    console.log('JS Length:', data.length);
    fs.writeFileSync('combined_litespeed.js', data, 'utf8');
    console.log('Saved combined_litespeed.js');
    console.log('Contains setupChannelSlider?', data.includes('setupChannelSlider'));
    console.log('Contains setupServicesLoop?', data.includes('setupServicesLoop'));
    console.log('Contains services-track?', data.includes('services-track'));
    console.log('Contains review-carousel?', data.includes('review-carousel'));
    console.log('Contains initReviewCarousel?', data.includes('initReviewCarousel'));
  });
}).on('error', err => {
  console.error('Fetch error:', err.message);
});
