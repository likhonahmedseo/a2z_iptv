(function () {
    const nav = `
    <nav class="fixed w-full z-50 glass-nav border-b border-line/60 transition-shadow duration-300" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <a href="https://a2ziptv.net/" class="flex-shrink-0 flex items-center gap-2.5">
                    <div class="w-10 h-10 bg-gradient-to-br from-primary to-primaryHover rounded-xl flex items-center justify-center text-white font-heading font-bold text-lg shadow-glow">A2</div>
                    <span class="font-heading font-bold text-xl tracking-tight text-white">a2ziptv<span class="text-primary">.</span></span>
                </a>
                <div class="hidden lg:flex items-center gap-8">
                    <a href="https://a2ziptv.net/" class="text-gray-300 hover:text-white text-sm font-medium transition-colors">Home</a>
                    <div class="relative group py-7">
                        <button type="button" class="text-gray-300 group-hover:text-white text-sm font-medium transition-colors flex items-center gap-2">
                            Subscriptions <i class="fas fa-chevron-down text-[10px] text-gray-500 group-hover:text-primary transition-colors"></i>
                        </button>
                        <div class="absolute left-0 top-full w-56 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                            <div class="bg-card border border-line rounded-xl shadow-card p-2">
                                <a href="https://a2ziptv.net/single-connection/" class="block px-4 py-3 rounded-lg text-gray-300 hover:bg-cardLight hover:text-white text-sm font-medium transition-colors">Single Connection</a>
                                <a href="https://a2ziptv.net/multi-connections/" class="block px-4 py-3 rounded-lg text-gray-300 hover:bg-cardLight hover:text-white text-sm font-medium transition-colors">Multi Connections</a>
                                <a href="https://a2ziptv.net/free-trial/" class="block px-4 py-3 rounded-lg text-gray-300 hover:bg-cardLight hover:text-white text-sm font-medium transition-colors">Free Trial</a>
                                <a href="https://a2ziptv.net/custom-playlist/" class="block px-4 py-3 rounded-lg text-gray-300 hover:bg-cardLight hover:text-white text-sm font-medium transition-colors">Country Lists</a>
                                <a href="https://a2ziptv.net/setup-guide/" class="block px-4 py-3 rounded-lg text-gray-300 hover:bg-cardLight hover:text-white text-sm font-medium transition-colors">Setup Guide</a>
                            </div>
                        </div>
                    </div>
                    <div class="relative group py-7">
                        <button type="button" class="text-gray-300 group-hover:text-white text-sm font-medium transition-colors flex items-center gap-2">
                            Restream <i class="fas fa-chevron-down text-[10px] text-gray-500 group-hover:text-primary transition-colors"></i>
                        </button>
                        <div class="absolute left-0 top-full w-48 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                            <div class="bg-card border border-line rounded-xl shadow-card p-2">
                                <a href="https://a2ziptv.net/restream/" class="block px-4 py-3 rounded-lg text-gray-300 hover:bg-cardLight hover:text-white text-sm font-medium transition-colors">Restream</a>
                                <a href="https://a2ziptv.net/vip-stream/" class="block px-4 py-3 rounded-lg text-gray-300 hover:bg-cardLight hover:text-white text-sm font-medium transition-colors">VIP Stream</a>
                            </div>
                        </div>
                    </div>
                    <a href="https://a2ziptv.net/reseller/" class="text-gray-300 hover:text-white text-sm font-medium transition-colors">Reseller</a>
                </div>
                <div class="hidden lg:flex items-center gap-4">
                    <a href="https://t.me/A2ziPTV" target="_blank" rel="noopener" class="text-gray-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-2">
                        <i class="fab fa-telegram text-sky-400 text-lg"></i> Contact
                    </a>
                    <a href="https://a2ziptv.net/free-trial/" class="bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-glow">Free Trial</a>
                </div>
                <button id="menuBtn" class="lg:hidden text-white focus:outline-none text-2xl" aria-label="Toggle menu">
                    <i class="fas fa-bars" id="menuIcon"></i>
                </button>
            </div>
        </div>
        <div id="mobileMenu" class="lg:hidden hidden bg-dark/98 border-t border-line/60">
            <div class="px-6 py-6 flex flex-col gap-5">
                <a href="https://a2ziptv.net/" class="mobile-link text-gray-300 font-medium">Home</a>
                <div class="space-y-3">
                    <p class="text-white font-semibold text-sm">Subscriptions</p>
                    <div class="pl-4 border-l border-line space-y-3">
                        <a href="https://a2ziptv.net/single-connection/" class="mobile-link block text-gray-300 font-medium">Single Connection</a>
                        <a href="https://a2ziptv.net/multi-connections/" class="mobile-link block text-gray-300 font-medium">Multi Connections</a>
                        <a href="https://a2ziptv.net/free-trial/" class="mobile-link block text-gray-300 font-medium">Free Trial</a>
                        <a href="https://a2ziptv.net/custom-playlist/" class="mobile-link block text-gray-300 font-medium">Country Lists</a>
                        <a href="https://a2ziptv.net/setup-guide/" class="mobile-link block text-gray-300 font-medium">Setup Guide</a>
                    </div>
                </div>
                <div class="space-y-3">
                    <p class="text-white font-semibold text-sm">Restream</p>
                    <div class="pl-4 border-l border-line space-y-3">
                        <a href="https://a2ziptv.net/restream/" class="mobile-link block text-gray-300 font-medium">Restream</a>
                        <a href="https://a2ziptv.net/vip-stream/" class="mobile-link block text-gray-300 font-medium">VIP Stream</a>
                    </div>
                </div>
                <a href="https://a2ziptv.net/reseller/" class="mobile-link text-gray-300 font-medium">Reseller</a>
                <a href="https://a2ziptv.net/free-trial/" class="bg-primary text-white text-center px-6 py-3 rounded-full font-semibold">Free Trial</a>
            </div>
        </div>
    </nav>`;

    const footer = `
    <footer class="bg-card border-t border-line/60 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                <div class="lg:col-span-2">
                    <a href="https://a2ziptv.net/" class="flex items-center gap-2.5 mb-4">
                        <div class="w-9 h-9 bg-gradient-to-br from-primary to-primaryHover rounded-lg flex items-center justify-center text-white font-heading font-bold">A2</div>
                        <span class="font-heading font-bold text-xl text-white">a2ziptv<span class="text-primary">.</span></span>
                    </a>
                    <p class="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">Best affordable IPTV service provider worldwide. Premium IPTV subscription with 25,000+ live channels, movies, sports and on-demand content in HD & 4K.</p>
                    <div class="flex items-center gap-4">
                        <a href="https://wa.me/447397224460" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-line hover:bg-green-500 flex items-center justify-center text-gray-300 hover:text-white transition-colors" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                        <a href="https://t.me/A2ziPTV" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-line hover:bg-sky-500 flex items-center justify-center text-gray-300 hover:text-white transition-colors" aria-label="Telegram"><i class="fab fa-telegram"></i></a>
                        <a href="https://www.facebook.com/share/15prXzVgeP/?mibextid=wwXIfr" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-line hover:bg-primary flex items-center justify-center text-gray-300 hover:text-white transition-colors" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/a2ziptv.1?igsh=MWNqbjZkM3l2dzBxbg%3D%3D" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-line hover:bg-primary flex items-center justify-center text-gray-300 hover:text-white transition-colors" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-white mb-4">Quick Links</h4>
                    <ul class="space-y-3">
                        <li><a href="https://a2ziptv.net/" class="text-gray-500 hover:text-primary text-sm transition-colors">Home</a></li>
                        <li><a href="https://a2ziptv.net/#pricing" class="text-gray-500 hover:text-primary text-sm transition-colors">Pricing Plans</a></li>
                        <li><a href="https://a2ziptv.net/#features" class="text-gray-500 hover:text-primary text-sm transition-colors">Features</a></li>
                        <li><a href="https://a2ziptv.net/#channels" class="text-gray-500 hover:text-primary text-sm transition-colors">Channels List</a></li>
                        <li><a href="https://a2ziptv.net/free-trial/" class="text-gray-500 hover:text-primary text-sm transition-colors">Free Trial</a></li>
                        <li><a href="https://a2ziptv.net/setup-guide/" class="text-gray-500 hover:text-primary text-sm transition-colors">Setup Guide</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-white mb-4">Services</h4>
                    <ul class="space-y-3">
                        <li><a href="https://a2ziptv.net/single-connection/" class="text-gray-500 hover:text-primary text-sm transition-colors">Single Connection</a></li>
                        <li><a href="https://a2ziptv.net/multi-connections/" class="text-gray-500 hover:text-primary text-sm transition-colors">Multi Connections</a></li>
                        <li><a href="https://a2ziptv.net/free-trial/" class="text-gray-500 hover:text-primary text-sm transition-colors">Free Trial</a></li>
                        <li><a href="https://a2ziptv.net/custom-playlist/" class="text-gray-500 hover:text-primary text-sm transition-colors">Country Lists</a></li>
                        <li><a href="https://a2ziptv.net/setup-guide/" class="text-gray-500 hover:text-primary text-sm transition-colors">Setup Guide</a></li>
                        <li><a href="https://a2ziptv.net/vip-stream/" class="text-gray-500 hover:text-primary text-sm transition-colors">VIP Subscription</a></li>
                        <li><a href="https://a2ziptv.net/restream/" class="text-gray-500 hover:text-primary text-sm transition-colors">Restream Line</a></li>
                        <li><a href="https://a2ziptv.net/reseller/" class="text-gray-500 hover:text-primary text-sm transition-colors">Reseller Panel</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-white mb-4">Support</h4>
                    <ul class="space-y-3">
                        <li><a href="https://a2ziptv.net/free-trial/" class="text-gray-500 hover:text-primary text-sm transition-colors">Free Trial</a></li>
                        <li><a href="https://a2ziptv.net/setup-guide/" class="text-gray-500 hover:text-primary text-sm transition-colors">Setup Guide</a></li>
                        <li><a href="https://t.me/A2ziPTV" target="_blank" rel="noopener" class="text-gray-500 hover:text-primary text-sm transition-colors">Contact Us</a></li>
                        <li><a href="https://a2ziptv.net/privacy-policy/" target="_blank" rel="noopener" class="text-gray-500 hover:text-primary text-sm transition-colors">Privacy Policy</a></li>
                        <li><a href="https://a2ziptv.net/refund_returns/" class="text-gray-500 hover:text-primary text-sm transition-colors">Refund Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-line/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-gray-500 text-sm">&copy; 2026 a2ziptv. All rights reserved.</p>
                <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span class="text-sm text-gray-500">All systems operational</span>
                </div>
            </div>
        </div>
    </footer>`;

    const mount = (selector, html) => {
        const target = document.querySelector(selector);
        if (target) target.innerHTML = html;
    };

    mount('[data-common-menu]', nav);
    mount('[data-common-footer]', footer);

    // Keep anchored sections clear of the fixed navbar when navigating to #section links.
    const style = document.createElement('style');
    style.textContent = '[id] { scroll-margin-top: 96px; }';
    document.head.appendChild(style);

    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('shadow-soft', window.scrollY > 20);
        });
    }

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    if (menuBtn && mobileMenu && menuIcon) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-xmark');
        });

        document.querySelectorAll('.mobile-link').forEach((link) => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-xmark');
            });
        });
    }
})();
