const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

function replaceBetween(startMarker, endMarker, replacement) {
  const start = html.indexOf(startMarker);
  if (start === -1) throw new Error(`Missing start marker: ${startMarker}`);
  const end = html.indexOf(endMarker, start + startMarker.length);
  if (end === -1) throw new Error(`Missing end marker: ${endMarker}`);
  html = html.slice(0, start) + replacement.trimEnd() + '\n\n    ' + html.slice(end);
}

replaceBetween('<!-- ================= HERO ================= -->', '<!-- ================= STATS BAR ================= -->', `
<!-- ================= HERO ================= -->
    <section id="home" class="relative pt-36 pb-24 lg:pt-48 lg:pb-36 overflow-hidden">
        <div class="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] animate-pulseGlow"></div>
        <div class="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] animate-pulseGlow" style="animation-delay: 1.5s"></div>
        <div class="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="text-center lg:text-left">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-7">
                        <span class="w-2 h-2 rounded-full bg-primary glow-dot animate-pulse"></span>
                        Best affordable IPTV restream service for resellers, panels, and operators
                    </div>
                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] text-white mb-6">
                        Affordable IPTV<br>
                        <span class="text-gradient">Restream Service</span>
                    </h1>
                    <p class="text-lg text-gray-400 mb-9 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        A2Z IPTV provides a reliable and affordable IPTV restream solution for businesses that want one of the best ways to scale source access, connection capacity, trusted support, and secure setup guidance. Get M3U and Xtream Codes style workflows, global country bouquets, sports coverage, VOD categories, and fast help for growing streaming businesses.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="https://a2ziptv.net/restream/" class="bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-glow flex items-center justify-center gap-2">
                            View Restream Plans <i class="fas fa-arrow-right"></i>
                        </a>
                        <a href="https://a2ziptv.net/reseller/" class="bg-card border border-line hover:border-primary/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2">
                            <i class="fas fa-store text-primary"></i> Reseller Panel
                        </a>
                    </div>
                    <div class="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-gray-400 font-medium">
                        <span class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Affordable Capacity</span>
                        <span class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> M3U & Panel Friendly</span>
                        <span class="flex items-center gap-2"><i class="fas fa-check-circle text-green-500"></i> Trusted Restream Support</span>
                    </div>
                </div>

                <div class="relative hidden lg:block">
                    <div class="relative rounded-3xl overflow-hidden border border-line shadow-soft">
                        <img src="https://a2ziptv.net/wp-content/uploads/2026/09/premium-IPTV-restreaming-service.webp" alt="Premium IPTV restreaming service for business operators" class="hero-media w-full h-[480px] object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/35 to-transparent"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-6">
                            <div class="flex items-center gap-3 mb-3">
                                <span class="w-3 h-3 rounded-full bg-primary"></span>
                                <span class="text-sm font-semibold text-white">RESTREAM SOURCE • M3U • XTREAM API</span>
                            </div>
                            <div class="h-1.5 bg-white/20 rounded-full overflow-hidden mb-2">
                                <div class="h-full w-2/3 bg-primary rounded-full"></div>
                            </div>
                            <div class="flex items-center justify-between text-white/80 text-sm">
                                <div class="flex items-center gap-4">
                                    <i class="fas fa-server"></i><i class="fas fa-signal"></i><i class="fas fa-users"></i>
                                </div>
                                <span>Capacity built for business use</span>
                            </div>
                        </div>
                    </div>
                    <div class="absolute -left-8 top-10 bg-card border border-line rounded-2xl px-5 py-4 shadow-card animate-float">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center"><i class="fas fa-network-wired"></i></div>
                            <div>
                                <p class="text-white font-bold text-lg leading-none">Restream</p>
                                <p class="text-xs text-gray-400 mt-1">Source lines</p>
                            </div>
                        </div>
                    </div>
                    <div class="absolute -right-6 bottom-24 bg-card border border-line rounded-2xl px-5 py-4 shadow-card animate-float" style="animation-delay: 1.2s">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-green-500/15 text-green-500 flex items-center justify-center"><i class="fas fa-gauge-high"></i></div>
                            <div>
                                <p class="text-white font-bold text-lg leading-none">1,000</p>
                                <p class="text-xs text-gray-400 mt-1">Connection scale</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`);

replaceBetween('<!-- ================= SERVICES ================= -->', '<!-- ================= PREMIUM IPTV CHANNEL LINEUP ================= -->', `
<!-- ================= SERVICES ================= -->
    <section id="services" class="py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-primary font-semibold text-sm uppercase tracking-widest">Restream First</span>
                <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mt-3">Start With <span class="text-gradient">Reliable IPTV Restream Lines</span></h2>
                <p class="text-gray-400 mt-4 leading-relaxed">
                    A2Z IPTV leads with reliable restream supply for business use. Reseller panels, VIP streams, and personal IPTV subscriptions are available, but serious buyers can move straight to affordable, secure, and scalable IPTV source lines first.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="group bg-gradient-to-b from-primary/20 to-card border border-primary/70 rounded-2xl p-8 hover:border-primary hover:shadow-glow transition-all duration-300">
                    <div class="w-14 h-14 rounded-xl bg-primary text-white flex items-center justify-center text-2xl mb-6 transition-colors duration-300">
                        <i class="fas fa-satellite-dish"></i>
                    </div>
                    <h3 class="text-xl font-bold font-heading text-white mb-3">IPTV Restream Line</h3>
                    <p class="text-gray-300 text-sm leading-relaxed mb-6">Reliable, source-ready restream access for Xtream-style panels, M3U delivery, local IPTV businesses, broadband operators, and sellers who need affordable connection capacity.</p>
                    <a href="https://a2ziptv.net/restream/" class="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        View Restream Plans <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div class="group bg-card border border-line rounded-2xl p-8 hover:border-primary/60 hover:shadow-glow transition-all duration-300">
                    <div class="w-14 h-14 rounded-xl bg-primary/15 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <i class="fas fa-store"></i>
                    </div>
                    <h3 class="text-xl font-bold font-heading text-white mb-3">IPTV Reseller Panel</h3>
                    <p class="text-gray-400 text-sm leading-relaxed mb-6">Create customer lines, manage credits, handle renewals, and sell IPTV packages with a trusted workflow after your source or reseller account is ready.</p>
                    <a href="https://a2ziptv.net/reseller/" class="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        Get Reseller Panel <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div class="group bg-card border border-line rounded-2xl p-8 hover:border-primary/60 hover:shadow-glow transition-all duration-300">
                    <div class="w-14 h-14 rounded-xl bg-primary/15 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <i class="fas fa-crown"></i>
                    </div>
                    <h3 class="text-xl font-bold font-heading text-white mb-3">VIP Stream Access</h3>
                    <p class="text-gray-400 text-sm leading-relaxed mb-6">Premium country bouquets and reliable sports-heavy VIP categories for sellers or advanced users who need stronger regional coverage.</p>
                    <a href="https://a2ziptv.net/vip-stream/" class="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        View VIP Stream <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div class="group bg-card border border-line rounded-2xl p-8 hover:border-primary/60 hover:shadow-glow transition-all duration-300">
                    <div class="w-14 h-14 rounded-xl bg-primary/15 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <i class="fas fa-tv"></i>
                    </div>
                    <h3 class="text-xl font-bold font-heading text-white mb-3">IPTV Subscription</h3>
                    <p class="text-gray-400 text-sm leading-relaxed mb-6">Affordable personal IPTV plans remain available for home viewers who want one simple login for live TV, sports, movies, series, and VOD.</p>
                    <a href="https://a2ziptv.net/single-connection/" class="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        View Subscriber Plans <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>`);

replaceBetween('<!-- ================= RESTREAMER READY ================= -->', '<!-- ================= FEATURES ================= -->', `
<!-- ================= RESTREAMER READY ================= -->
    <section class="py-24 bg-card/40 border-y border-line/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="reveal">
                    <span class="text-primary font-semibold text-sm uppercase tracking-widest">Restreamer Ready</span>
                    <h2 class="text-3xl md:text-5xl font-heading font-bold text-white mt-3 mb-6">A Reliable Restream Source Built for Daily IPTV Sales</h2>
                    <p class="text-gray-400 leading-relaxed mb-8">A2Z IPTV gives operators a direct path from trusted restream source to customer delivery. Use your line with compatible panels and player workflows, organize country categories, test peak-time sports streams, and scale with affordable capacity instead of pushing every buyer into a personal subscription plan.</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-card border border-line rounded-2xl p-5"><i class="fas fa-arrows-spin text-primary text-2xl mb-4"></i><h3 class="text-white font-bold mb-2">Clean source workflow</h3><p class="text-gray-500 text-sm leading-relaxed">Add restream access, refresh playlists, organize bouquets, and serve customers from the workflow you already use.</p></div>
                        <div class="bg-card border border-line rounded-2xl p-5"><i class="fas fa-gauge-high text-primary text-2xl mb-4"></i><h3 class="text-white font-bold mb-2">Affordable scale</h3><p class="text-gray-500 text-sm leading-relaxed">Start with 50 restream connections and move into 100, 300, 500, or 1,000 connection capacity as demand grows.</p></div>
                    </div>
                </div>
                <div class="reveal bg-card border border-line rounded-3xl p-6 md:p-8 shadow-soft">
                    <div class="grid gap-5">
                        <div class="step-card bg-dark/70 border border-line rounded-2xl p-6 flex gap-4">
                            <span class="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold shrink-0">1</span>
                            <div><h3 class="text-white font-bold mb-1">Choose restream capacity</h3><p class="text-gray-500 text-sm">Match the connection count to your panel size, seller network, local broadband audience, or customer demand.</p></div>
                        </div>
                        <div class="step-card bg-dark/70 border border-line rounded-2xl p-6 flex gap-4">
                            <span class="w-12 h-12 rounded-xl bg-gold text-dark flex items-center justify-center font-bold shrink-0">2</span>
                            <div><h3 class="text-white font-bold mb-1">Connect panel or playlist</h3><p class="text-gray-500 text-sm">Use supplied restream details with M3U, Xtream Codes API style login, compatible panels, or your preferred IPTV delivery setup.</p></div>
                        </div>
                        <div class="step-card bg-dark/70 border border-line rounded-2xl p-6 flex gap-4">
                            <span class="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center font-bold shrink-0">3</span>
                            <div><h3 class="text-white font-bold mb-1">Serve your customers</h3><p class="text-gray-500 text-sm">Deliver live TV, football, cricket, PPV-style events, USA and UK channels, VIP countries, movies, series, and EPG where supported.</p></div>
                        </div>
                    </div>
                    <div class="mt-7 flex flex-col sm:flex-row gap-4">
                        <a href="https://a2ziptv.net/restream/" class="bg-primary hover:bg-primaryHover text-white px-7 py-3.5 rounded-full font-bold inline-flex justify-center items-center gap-2 shadow-glow">Restream Options <i class="fas fa-arrow-right"></i></a>
                        <a href="https://a2ziptv.net/setup-guide/" class="border border-primary/70 text-primary hover:bg-primary hover:text-white px-7 py-3.5 rounded-full font-bold inline-flex justify-center items-center gap-2">Setup Guide</a>
                    </div>
                </div>
            </div>
        </div>
    </section>`);

replaceBetween('<!-- ================= HOW IT WORKS ================= -->', '<!-- ================= PRICING ================= -->', `
<!-- ================= HOW IT WORKS ================= -->
    <section class="py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <span class="text-primary font-semibold text-sm uppercase tracking-widest">Restream Workflow</span>
                <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mt-3">How IPTV Restream <span class="text-gradient">Works</span></h2>
                <p class="text-gray-400 mt-4">A simple setup path for operators who need a stable IPTV source line before building reseller or subscriber sales.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="reveal relative bg-card border border-line rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300">
                    <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center shadow-glow">1</div>
                    <div class="w-14 h-14 rounded-xl bg-primary/15 text-primary flex items-center justify-center text-2xl mx-auto mt-4 mb-5"><i class="fas fa-server"></i></div>
                    <h3 class="text-lg font-bold font-heading text-white mb-2">Pick Restream Capacity</h3>
                    <p class="text-gray-400 text-sm">Choose 50, 100, 300, 500, or 1,000 reliable connections based on your customer count, panel load, and growth plan.</p>
                </div>
                <div class="reveal relative bg-card border border-line rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300" style="transition-delay:.1s">
                    <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center shadow-glow">2</div>
                    <div class="w-14 h-14 rounded-xl bg-primary/15 text-primary flex items-center justify-center text-2xl mx-auto mt-4 mb-5"><i class="fas fa-plug-circle-bolt"></i></div>
                    <h3 class="text-lg font-bold font-heading text-white mb-2">Add Source Details</h3>
                    <p class="text-gray-400 text-sm">Connect the supplied restream line to your M3U, Xtream Codes API style app, reseller panel, or IPTV delivery workflow.</p>
                </div>
                <div class="reveal relative bg-card border border-line rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300" style="transition-delay:.2s">
                    <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center shadow-glow">3</div>
                    <div class="w-14 h-14 rounded-xl bg-primary/15 text-primary flex items-center justify-center text-2xl mx-auto mt-4 mb-5"><i class="fas fa-chart-line"></i></div>
                    <h3 class="text-lg font-bold font-heading text-white mb-2">Sell and Scale</h3>
                    <p class="text-gray-400 text-sm">Package live channels, sports, VOD, country bouquets, and VIP access for your audience while A2Z supports the source side.</p>
                </div>
            </div>
        </div>
    </section>`);

replaceBetween('<!-- ================= PRICING ================= -->', '<!-- ================= PAYMENT METHODS ================= -->', `
<!-- ================= PRICING ================= -->
    <section id="pricing" class="py-24 bg-card/40 border-y border-line/60 relative overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-primary font-semibold text-sm uppercase tracking-widest">Affordable IPTV Restream Packages</span>
                <h2 class="text-3xl md:text-5xl font-heading font-bold text-white mt-3">Choose Your <span class="text-gradient">Restream Connection Plan</span></h2>
                <p class="text-gray-400 mt-5 leading-relaxed">
                    Restream pricing is placed first for operators, resellers, and local IPTV businesses that need reliable source capacity. Personal IPTV subscriptions are still available, but business buyers can begin with an affordable restream plan backed by trusted setup support.
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                <div class="plan-card bg-card border border-line rounded-3xl p-7 flex flex-col hover:border-primary/50 hover:shadow-glow">
                    <i class="fas fa-server text-primary text-3xl mb-5"></i>
                    <h3 class="text-lg font-bold font-heading text-white">Starter Restream</h3>
                    <p class="text-gray-500 text-sm mb-5">2 GB Individual Server</p>
                    <div class="mb-6"><span class="text-4xl font-heading font-bold text-white">€100</span><p class="text-primary font-bold mt-2">50 Connections</p></div>
                    <ul class="space-y-3 mb-8 flex-1 text-sm">
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-400">Entry IPTV restream source</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-400">M3U and panel-friendly use</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-400">Setup support included</span></li>
                    </ul>
                    <a href="https://a2ziptv.net?add-to-cart=1397&quantity=1&e-redirect=https://a2ziptv.net/product/100-connections-2gb-personal-server/" target="_blank" rel="noopener" class="block text-center py-3 rounded-full border-2 border-primary/60 text-primary font-semibold hover:bg-primary hover:text-white transition-all">Buy Restream</a>
                </div>

                <div class="plan-card bg-gradient-to-b from-primary/15 to-card border-2 border-primary rounded-3xl p-7 flex flex-col relative shadow-glow">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-glow whitespace-nowrap">Popular</div>
                    <i class="fas fa-network-wired text-primary text-3xl mb-5 mt-2"></i>
                    <h3 class="text-lg font-bold font-heading text-white">Pro Restream</h3>
                    <p class="text-gray-500 text-sm mb-5">2 GB Personal Server</p>
                    <div class="mb-6"><span class="text-4xl font-heading font-bold text-white">€200</span><p class="text-primary font-bold mt-2">100 Connections</p></div>
                    <ul class="space-y-3 mb-8 flex-1 text-sm">
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-300">Reliable restream line capacity</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-300">Sports and country bouquets</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-300">Fast activation and guidance</span></li>
                    </ul>
                    <a href="https://a2ziptv.net?add-to-cart=1398&quantity=1&e-redirect=https://a2ziptv.net/product/pro-100-connections-2-gb-personal-server/" target="_blank" rel="noopener" class="block text-center py-3 rounded-full bg-primary hover:bg-primaryHover text-white font-semibold transition-all">Buy Restream</a>
                </div>

                <div class="plan-card bg-card border border-line rounded-3xl p-7 flex flex-col hover:border-primary/50 hover:shadow-glow">
                    <i class="fas fa-gauge-high text-primary text-3xl mb-5"></i>
                    <h3 class="text-lg font-bold font-heading text-white">Premium Restream</h3>
                    <p class="text-gray-500 text-sm mb-5">5 GB Personal Server</p>
                    <div class="mb-6"><span class="text-4xl font-heading font-bold text-white">€450</span><p class="text-primary font-bold mt-2">300 Connections</p></div>
                    <ul class="space-y-3 mb-8 flex-1 text-sm">
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-400">Higher operator capacity</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-400">Panel and reseller workflow</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-400">Peak-time stability focus</span></li>
                    </ul>
                    <a href="https://a2ziptv.net?add-to-cart=1399&quantity=1&e-redirect=https://a2ziptv.net/product/premium-200-connections-5-gb-personal-server/" target="_blank" rel="noopener" class="block text-center py-3 rounded-full border-2 border-primary/60 text-primary font-semibold hover:bg-primary hover:text-white transition-all">Buy Restream</a>
                </div>

                <div class="plan-card bg-card border border-line rounded-3xl p-7 flex flex-col hover:border-primary/50 hover:shadow-glow">
                    <i class="fas fa-tower-broadcast text-primary text-3xl mb-5"></i>
                    <h3 class="text-lg font-bold font-heading text-white">Gold Restream</h3>
                    <p class="text-gray-500 text-sm mb-5">10 GB Personal Server</p>
                    <div class="mb-6"><span class="text-4xl font-heading font-bold text-white">€750</span><p class="text-primary font-bold mt-2">500 Connections</p></div>
                    <ul class="space-y-3 mb-8 flex-1 text-sm">
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-400">Built for growing sellers</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-400">Country and sports delivery</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-400">Priority restream guidance</span></li>
                    </ul>
                    <a href="https://a2ziptv.net?add-to-cart=1400&quantity=1&e-redirect=https://a2ziptv.net/product/gold-500-connections-10-gb-personal-server/" target="_blank" rel="noopener" class="block text-center py-3 rounded-full border-2 border-primary/60 text-primary font-semibold hover:bg-primary hover:text-white transition-all">Buy Restream</a>
                </div>

                <div class="plan-card bg-card border border-line rounded-3xl p-7 flex flex-col hover:border-primary/50 hover:shadow-glow">
                    <i class="fas fa-building-signal text-primary text-3xl mb-5"></i>
                    <h3 class="text-lg font-bold font-heading text-white">Gold+ Restream</h3>
                    <p class="text-gray-500 text-sm mb-5">10 GB Scale Server</p>
                    <div class="mb-6"><span class="text-4xl font-heading font-bold text-white">€1,200</span><p class="text-primary font-bold mt-2">1,000 Connections</p></div>
                    <ul class="space-y-3 mb-8 flex-1 text-sm">
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-400">Large IPTV operator capacity</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-400">Broadband provider friendly</span></li>
                        <li class="flex items-start gap-3"><i class="fas fa-check text-green-500 mt-0.5"></i><span class="text-gray-400">Priority support and scaling</span></li>
                    </ul>
                    <a href="https://a2ziptv.net?add-to-cart=1460&quantity=1&e-redirect=https://a2ziptv.net/product/gold-1000-connections-10-gb-personal-server/" target="_blank" rel="noopener" class="block text-center py-3 rounded-full border-2 border-primary/60 text-primary font-semibold hover:bg-primary hover:text-white transition-all">Buy Restream</a>
                </div>
            </div>

            <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://a2ziptv.net/restream/" class="bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 shadow-glow">Full Restream Page <i class="fas fa-arrow-right"></i></a>
                <a href="https://a2ziptv.net/single-connection/" class="border border-line hover:border-primary/50 text-white px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 transition-all"><i class="fas fa-tv text-primary"></i> Personal IPTV Plans</a>
            </div>
        </div>
    </section>`);

replaceBetween('<!-- ================= FAQ ================= -->', '<!-- ================= EXCLUSIVE PERKS CTA ================= -->', `
<!-- ================= FAQ ================= -->
    <section id="faq" class="py-24 bg-card/40 border-y border-line/60">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary font-semibold text-sm uppercase tracking-widest">FAQ</span>
                <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mt-3">Trusted IPTV Restream <span class="text-gradient">Questions</span></h2>
                <p class="text-gray-400 mt-4">Clear answers for restream buyers, resellers, and viewers choosing the best A2Z IPTV path for their setup.</p>
            </div>

            <div class="space-y-4">
                <div class="bg-card border border-line rounded-2xl overflow-hidden faq-item">
                    <button class="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none" aria-expanded="false">
                        <span class="font-semibold text-white text-base">What is an IPTV restream service?</span>
                        <span class="faq-icon w-8 h-8 rounded-full bg-line text-gray-300 flex items-center justify-center shrink-0"><i class="fas fa-plus"></i></span>
                    </button>
                    <div class="faq-answer px-6 bg-cardLight/60 border-t border-line/60">
                        <div class="py-5 text-gray-400 text-sm leading-relaxed">An IPTV restream service gives operators a source line they can connect to their own panel, playlist workflow, or customer delivery setup. It is built for business use, reseller growth, local IPTV sellers, and broadband-style distribution.</div>
                    </div>
                </div>

                <div class="bg-card border border-line rounded-2xl overflow-hidden faq-item">
                    <button class="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none" aria-expanded="false">
                        <span class="font-semibold text-white text-base">Is A2Z IPTV a trusted IPTV restream provider?</span>
                        <span class="faq-icon w-8 h-8 rounded-full bg-line text-gray-300 flex items-center justify-center shrink-0"><i class="fas fa-plus"></i></span>
                    </button>
                    <div class="faq-answer px-6 bg-cardLight/60 border-t border-line/60">
                        <div class="py-5 text-gray-400 text-sm leading-relaxed">A2Z IPTV prioritizes trusted IPTV restream lines as the main service. Reseller panels, VIP streams, and personal IPTV subscriptions are still available as separate paths so buyers can choose the correct setup faster.</div>
                    </div>
                </div>

                <div class="bg-card border border-line rounded-2xl overflow-hidden faq-item">
                    <button class="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none" aria-expanded="false">
                        <span class="font-semibold text-white text-base">Which formats and panels can use the restream line?</span>
                        <span class="faq-icon w-8 h-8 rounded-full bg-line text-gray-300 flex items-center justify-center shrink-0"><i class="fas fa-plus"></i></span>
                    </button>
                    <div class="faq-answer px-6 bg-cardLight/60 border-t border-line/60">
                        <div class="py-5 text-gray-400 text-sm leading-relaxed">A2Z IPTV is positioned for secure common IPTV workflows including M3U playlist use, Xtream Codes API style login, reseller panels, compatible IPTV apps, and operator dashboards. Support can guide you to the cleanest setup for your device or panel.</div>
                    </div>
                </div>

                <div class="bg-card border border-line rounded-2xl overflow-hidden faq-item">
                    <button class="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none" aria-expanded="false">
                        <span class="font-semibold text-white text-base">How many restream connections can I buy?</span>
                        <span class="faq-icon w-8 h-8 rounded-full bg-line text-gray-300 flex items-center justify-center shrink-0"><i class="fas fa-plus"></i></span>
                    </button>
                    <div class="faq-answer px-6 bg-cardLight/60 border-t border-line/60">
                        <div class="py-5 text-gray-400 text-sm leading-relaxed">You can start with 50 affordable connections and scale into 100, 300, 500, or 1,000 connection restream plans. Choose based on your customer base, panel load, region list, and expected sports-event traffic.</div>
                    </div>
                </div>

                <div class="bg-card border border-line rounded-2xl overflow-hidden faq-item">
                    <button class="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none" aria-expanded="false">
                        <span class="font-semibold text-white text-base">Do you support IPTV resellers?</span>
                        <span class="faq-icon w-8 h-8 rounded-full bg-line text-gray-300 flex items-center justify-center shrink-0"><i class="fas fa-plus"></i></span>
                    </button>
                    <div class="faq-answer px-6 bg-cardLight/60 border-t border-line/60">
                        <div class="py-5 text-gray-400 text-sm leading-relaxed">Yes. Resellers can use A2Z IPTV for panel-friendly services, customer line creation, credits, renewals, country bouquets, VIP access, and sales growth. Restream lines are best for sellers who need source capacity; reseller panels are best for managing individual customers.</div>
                    </div>
                </div>

                <div class="bg-card border border-line rounded-2xl overflow-hidden faq-item">
                    <button class="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none" aria-expanded="false">
                        <span class="font-semibold text-white text-base">Can I get sports IPTV restream coverage?</span>
                        <span class="faq-icon w-8 h-8 rounded-full bg-line text-gray-300 flex items-center justify-center shrink-0"><i class="fas fa-plus"></i></span>
                    </button>
                    <div class="faq-answer px-6 bg-cardLight/60 border-t border-line/60">
                        <div class="py-5 text-gray-400 text-sm leading-relaxed">A2Z IPTV highlights reliable football, cricket, basketball, motorsport, combat sports, tennis, regional sports, and PPV-style event categories where available. For best results, test the channels during the hours your audience watches most.</div>
                    </div>
                </div>

                <div class="bg-card border border-line rounded-2xl overflow-hidden faq-item">
                    <button class="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none" aria-expanded="false">
                        <span class="font-semibold text-white text-base">What is the difference between a restream line and an IPTV subscription?</span>
                        <span class="faq-icon w-8 h-8 rounded-full bg-line text-gray-300 flex items-center justify-center shrink-0"><i class="fas fa-plus"></i></span>
                    </button>
                    <div class="faq-answer px-6 bg-cardLight/60 border-t border-line/60">
                        <div class="py-5 text-gray-400 text-sm leading-relaxed">A restream line is for operators and sellers who need source capacity for many viewers or customers. A personal IPTV subscription is for one household or viewer who wants a simple app login for live TV, movies, series, sports, and VOD.</div>
                    </div>
                </div>

                <div class="bg-card border border-line rounded-2xl overflow-hidden faq-item">
                    <button class="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none" aria-expanded="false">
                        <span class="font-semibold text-white text-base">Can A2Z IPTV help with setup?</span>
                        <span class="faq-icon w-8 h-8 rounded-full bg-line text-gray-300 flex items-center justify-center shrink-0"><i class="fas fa-plus"></i></span>
                    </button>
                    <div class="faq-answer px-6 bg-cardLight/60 border-t border-line/60">
                        <div class="py-5 text-gray-400 text-sm leading-relaxed">Yes. Trusted support can help with choosing the right package, entering secured source details, refreshing playlists, checking apps, understanding connection limits, and troubleshooting buffering or category loading issues.</div>
                    </div>
                </div>

                <div class="bg-card border border-line rounded-2xl overflow-hidden faq-item">
                    <button class="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none" aria-expanded="false">
                        <span class="font-semibold text-white text-base">Do you provide country bouquets and VIP regions?</span>
                        <span class="faq-icon w-8 h-8 rounded-full bg-line text-gray-300 flex items-center justify-center shrink-0"><i class="fas fa-plus"></i></span>
                    </button>
                    <div class="faq-answer px-6 bg-cardLight/60 border-t border-line/60">
                        <div class="py-5 text-gray-400 text-sm leading-relaxed">Yes. A2Z IPTV includes worldwide channel categories and VIP country options for high-demand regions. These lists are useful for resellers and restream buyers serving USA, UK, Europe, MENA, Asia, Latino, and sports-focused audiences.</div>
                    </div>
                </div>

                <div class="bg-card border border-line rounded-2xl overflow-hidden faq-item">
                    <button class="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none" aria-expanded="false">
                        <span class="font-semibold text-white text-base">Can I test before choosing a bigger plan?</span>
                        <span class="faq-icon w-8 h-8 rounded-full bg-line text-gray-300 flex items-center justify-center shrink-0"><i class="fas fa-plus"></i></span>
                    </button>
                    <div class="faq-answer px-6 bg-cardLight/60 border-t border-line/60">
                        <div class="py-5 text-gray-400 text-sm leading-relaxed">Yes. Start with a smaller, affordable restream plan or request guidance before ordering more capacity. Testing during busy sports hours helps you choose the right connection count and avoid under-sizing your setup.</div>
                    </div>
                </div>

                <div class="bg-card border border-line rounded-2xl overflow-hidden faq-item">
                    <button class="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none" aria-expanded="false">
                        <span class="font-semibold text-white text-base">Do personal viewers still have an IPTV plan?</span>
                        <span class="faq-icon w-8 h-8 rounded-full bg-line text-gray-300 flex items-center justify-center shrink-0"><i class="fas fa-plus"></i></span>
                    </button>
                    <div class="faq-answer px-6 bg-cardLight/60 border-t border-line/60">
                        <div class="py-5 text-gray-400 text-sm leading-relaxed">Yes. Home viewers can still choose personal IPTV subscriptions for Smart TV, Firestick, Android, iPhone, MAG, PC, Mac, IPTV Smarters, TiviMate, VLC, and other supported players.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>`);

const replacements = [
  ['<p class="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">A2ZIPTV provides a premium streaming experience built for reliability, variety, and speed.</p>',
   '<p class="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">A2Z IPTV gives restream buyers and resellers a trusted channel source for live TV, sports, movies, regional bouquets, and VOD categories built for reliable daily delivery.</p>'],
  ['<p class="text-gray-400 mt-4 leading-relaxed">Find channels by country, VIP region, language, sports, movies, VOD, and special categories without digging through a messy playlist.</p>',
   '<p class="text-gray-400 mt-4 leading-relaxed">Organize your IPTV restream offer by country, VIP region, language, sports, movies, VOD, and special categories so customers can find the content they ask for most.</p>'],
  ['<h2 class="text-3xl md:text-5xl font-heading font-bold text-white mt-3">Built for Restream Operators First</h2>',
   '<h2 class="text-3xl md:text-5xl font-heading font-bold text-white mt-3">Trusted IPTV Restream Features Built for Serious Buyers</h2>'],
  ['A2Z IPTV is organized around restream performance: source reliability, panel compatibility, channel variety, country coverage, sports categories, scalable connections, and support for sellers who serve real customers.',
   'A2Z IPTV brings the essentials together for operators and sellers: a reliable IPTV restream service, affordable reseller panel options, secure M3U playlist support, Xtream Codes API style workflows, sports IPTV categories, VIP countries, and clear source-line packages.'],
  ['Stable Restream Sports Sources', 'Stable Sports IPTV Restream Sources'],
  ['25,000+ Source Channels', '25,000+ Source Channels for Restream'],
  ['Movies, Series, and VOD', 'Movies, Series, and VOD Source'],
  ['Fast Restream Activation', 'Fast IPTV Restream Activation'],
  ['Works on Popular Devices', 'Works With IPTV Apps and Panels'],
  ['Restream Capacity Plans', 'Affordable Restream Capacity Plans'],
  ['Reseller Growth After Restream', 'Reseller Panel Growth After Restream'],
  ['Flexible Global Payments', 'Secure Payments for Global IPTV Buyers'],
  ['<h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Unlock <span class="text-gradient">Exclusive Perks!</span></h2>',
   '<h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Build With a <span class="text-gradient">Trusted IPTV Restream Source</span></h2>'],
  ['Join our community today and get a world of benefits — a special welcome discount on your first purchase, early access to new launches, members-only content, and priority support.',
   'Choose A2Z IPTV when you need reliable restream capacity first, affordable reseller options second, and personal subscriptions only when the buyer is a home viewer. Get secure setup guidance, responsive support, and package options that can grow with your audience.'],
  ['<span class="flex items-center gap-2 text-sm text-gray-300 bg-dark/60 border border-line rounded-full px-4 py-2"><i class="fas fa-ticket text-primary"></i> Welcome Discount</span>',
   '<span class="flex items-center gap-2 text-sm text-gray-300 bg-dark/60 border border-line rounded-full px-4 py-2"><i class="fas fa-server text-primary"></i> Restream Source</span>'],
  ['<span class="flex items-center gap-2 text-sm text-gray-300 bg-dark/60 border border-line rounded-full px-4 py-2"><i class="fas fa-rocket text-primary"></i> Early Access</span>',
   '<span class="flex items-center gap-2 text-sm text-gray-300 bg-dark/60 border border-line rounded-full px-4 py-2"><i class="fas fa-network-wired text-primary"></i> Panel Friendly</span>'],
  ['<span class="flex items-center gap-2 text-sm text-gray-300 bg-dark/60 border border-line rounded-full px-4 py-2"><i class="fas fa-crown text-primary"></i> Members-Only Content</span>',
   '<span class="flex items-center gap-2 text-sm text-gray-300 bg-dark/60 border border-line rounded-full px-4 py-2"><i class="fas fa-crown text-primary"></i> VIP Countries</span>'],
  ['Explore Plans <i class="fas fa-arrow-right"></i>',
   'Explore Restream Plans <i class="fas fa-arrow-right"></i>']
];

for (const [from, to] of replacements) {
  if (html.includes(from)) {
    html = html.replace(from, to);
  }
}

fs.writeFileSync(file, html);
