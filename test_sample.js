const vm = require('vm');

// Test that our new code has ZERO && and parses cleanly even if WordPress converts '&' to '&#038;'
const sampleCode = `
(function () {
    const setupChannelSlider = function () {
        const tracks = document.querySelectorAll('.services-track');
        if (!tracks || !tracks.length) return;

        tracks.forEach(function (track) {
            track.classList.remove('is-ready');
            const clones = track.querySelectorAll('[data-clone="true"]');
            clones.forEach(function (clone) { clone.remove(); });

            const originals = Array.from(track.children);
            const scrollWrap = track.closest('.services-scroll');
            if (!originals.length) return;
            if (!scrollWrap) return;

            const originalWidth = track.scrollWidth;
            const viewportWidth = scrollWrap.clientWidth || window.innerWidth || 1200;
            let clonePasses = 0;

            while ((track.scrollWidth < originalWidth + viewportWidth + 360) ? (clonePasses < 4) : false) {
                originals.forEach(function (card) {
                    const clone = card.cloneNode(true);
                    clone.setAttribute('aria-hidden', 'true');
                    clone.dataset.clone = 'true';
                    track.appendChild(clone);
                });
                clonePasses += 1;
            }

            const dist = originalWidth > 0 ? originalWidth : 2500;
            const dur = Math.max(45, Math.round(dist / 55));
            track.style.setProperty('--services-scroll-distance', dist + 'px');
            track.style.setProperty('--services-scroll-duration', dur + 's');
            track.classList.add('is-ready');
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupChannelSlider);
    } else {
        setupChannelSlider();
    }
    window.addEventListener('load', setupChannelSlider);
    window.addEventListener('resize', setupChannelSlider);
    window.setTimeout(setupChannelSlider, 500);
})();
`;

try {
  new vm.Script(sampleCode);
  console.log('Sample code parsed successfully!');
} catch (e) {
  console.error('Syntax error:', e);
}

// Now simulate WordPress texturizing: does it contain any raw & that could become &#038;&#038;?
console.log('Contains && ?', sampleCode.includes('&&'));
console.log('Contains & ?', sampleCode.includes('&'));
