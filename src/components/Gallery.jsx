import React from 'react';

const Gallery = () => {
  return (
    <section className="bg-background-dark py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-primary/10 section-spacing">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-4 border-b md:border-none border-primary/10 pb-6 md:pb-0">
          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary lg:text-5xl shimmer-gold scroll-reveal">Curated Masterpieces</h2>
            <p className="text-primary/60 uppercase tracking-widest text-[10px] md:text-xs scroll-reveal">Exquisite. Rare. Eternal.</p>
          </div>
          <a className="text-[10px] md:text-sm font-bold text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all self-start md:self-auto" href="#">View All Collections</a>
        </div>
        <div className="flex gap-4 md:gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-6 md:px-0 -mx-6 md:mx-0 pt-4">
          <div className="group flex min-w-[75vw] sm:min-w-[280px] flex-1 flex-col gap-4 md:gap-6 lg:min-w-[300px] scroll-reveal stagger-1 tilt-card snap-center md:snap-align-none">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl transition-all duration-700 hover:scale-[1.02]">
              <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Close up of a luxury emerald ring on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAi9rioeRrBbsEttDg8Tr4qAE-qAw9yLLniR7GNfMRnOq5ZMlnmoi60eG7eDldjhpkL5rBtMD2BhavliqXvcGPb2aaJEYxC9THpOUZm7DZ4KnpZHU0ueuZufn-2fQ-sg7aekVKO4Zkz4-oZ-sLplUJd3igHZMiCLoo2vKG0fZNJeo6tq0JvsYoBNxoXKkCO1tpCs94ddS3gBWKz5M8Yep6cV-58sYR_FWrnGqXssLclxJKdduhfosE-MWEPnpuQ72g7SZNF66-_w4B" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-xl text-slate-100 scroll-reveal">The Emerald Throne</h3>
              <p className="text-primary/70 text-[10px] font-medium uppercase tracking-widest scroll-reveal">Deep Emerald &amp; Gold Edition</p>
            </div>
          </div>
          <div className="group flex min-w-[75vw] sm:min-w-[280px] flex-1 flex-col gap-4 md:gap-6 lg:min-w-[300px] scroll-reveal stagger-2 tilt-card snap-center md:snap-align-none">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl transition-all duration-700 hover:scale-[1.02]">
              <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="High-end diamond necklace on display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0TW_AtU9BqRFzrewYf8FUpOPz2eIYoy8E-9i5Urz-uADNTomXGZqR0Yj0IR3hHQJtW3v-IqAE0YkmqGJv6OyJMxIDHSVgTd0rAK0zLzWKjEke2sGT_YpQ7OhSmRyY6SBWJsIiNTGZTKPWCwJFZmUW7G3zCCjlGSuAU4T_W6QL3fD9Gs5Y2q5ek1TtvSQU0xE7-wDZOAsNglCmgwcrcOuT_hw2wcjNRY6b14cVvak2CWRhPY1pzIDoDm-RhS1BjJyIXMcJoDvkQoqt" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-xl text-slate-100 scroll-reveal">Ethereal Brilliance</h3>
              <p className="text-primary/70 text-[10px] font-medium uppercase tracking-widest scroll-reveal">Liquid Diamond Glow</p>
            </div>
          </div>
          <div className="group flex min-w-[75vw] sm:min-w-[280px] flex-1 flex-col gap-4 md:gap-6 lg:min-w-[300px] scroll-reveal stagger-3 tilt-card snap-center md:snap-align-none">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl transition-all duration-700 hover:scale-[1.02]">
              <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Artisanal gold bracelet handcrafted detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGjpyuoskhohVMgouaMCP9zvU-GIxA6HifSf9e2J_6BTJeVpwh6UK3SN8Dnc8OTtiZWwEdirAFqMeMBSQm4YiIKa_xmh3ALxWj3wVRHFYK11wLO3MArIX70ddJ9Czbl8NRGEN6ocDGbz_OcTXLiNY6z7atfH6BPhRxTHklHasjYYJVYBkJ5vzsrUabifwrIYhxe-yir3pBTscbZvxBqQl9ik1WDW2T7fm3p2qHd4iOaRmmC5rEOmAxetv1RmYCKGAySe1vQ45wrtDm" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-xl text-slate-100 scroll-reveal">Artisanal Gold</h3>
              <p className="text-primary/70 text-[10px] font-medium uppercase tracking-widest scroll-reveal">Heritage Signature</p>
            </div>
          </div>
          <div className="group flex min-w-[75vw] sm:min-w-[280px] flex-1 flex-col gap-4 md:gap-6 lg:min-w-[300px] scroll-reveal stagger-4 tilt-card snap-center md:snap-align-none">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl transition-all duration-700 hover:scale-[1.02]">
              <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Luxury gold and diamond earrings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjJk9bsNpq7vt3QWfN8J075NOytgQsyAgDLLS44T_KWkyvwX9Hw12ZBTFkJ77fN66HI__KAJxHV9wnqhatBXQeiGnRHvpZzD2q5LGZQla_S6Hs1GODKvE_JUy7YwmU8WKVeox20g6tn-55yhrA71IQZk4c61YJ6vaBnWbdxLCOQWiRmBiJjAT63cF4b66XKafEAXHcD7T7Eevnf4ukXW33sO7C_lPy4lMh5kzUVemLprmvjmKNHFzMK4I1Z57O5l2vlRGz-T5YXfqz" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-xl text-slate-100 scroll-reveal">Celestial Drops</h3>
              <p className="text-primary/70 text-[10px] font-medium uppercase tracking-widest scroll-reveal">Stellar Series</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
