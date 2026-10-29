const fs = require('fs');

const liveHtml = fs.readFileSync('live_page.html', 'utf8');

console.log('Does live_page.html contain "servicesSlide"?', liveHtml.includes('servicesSlide'));
console.log('Does live_page.html contain "setupServicesLoop"?', liveHtml.includes('setupServicesLoop'));
console.log('Does live_page.html contain "setupChannelSlider"?', liveHtml.includes('setupChannelSlider'));
console.log('Does live_page.html contain "is-ready"?', liveHtml.includes('is-ready'));
console.log('Does live_page.html contain "review-carousel"?', liveHtml.includes('review-carousel'));
console.log('Does live_page.html contain "initReviewCarousel"?', liveHtml.includes('initReviewCarousel'));
console.log('Does live_page.html contain "data-review-carousel"?', liveHtml.includes('data-review-carousel'));
console.log('Does live_page.html contain "services-track"?', liveHtml.includes('services-track'));
