import React from 'react';

const CuratedSets = () => {
  return (
    <section className="bg-background-dark section-spacing px-6 lg:px-20 border-t border-primary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
      <div className="mx-auto max-w-[1440px] relative z-10">
        <div className="text-center mb-16 md:mb-24 scroll-reveal">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-primary mb-4 md:mb-6 shimmer-gold scroll-reveal">Curated Sets</h2>
          <p className="text-primary/60 uppercase tracking-[0.5em] text-[10px] md:text-sm scroll-reveal">Harmony in Design</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="glass-card-premium p-4 group scroll-reveal stagger-1 animate-float tilt-card">
            <div className="overflow-hidden rounded-lg">
              <img alt="The Royal Set" className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDVNTAwm9cp10g5aXkWlnSiLaKrIWSvRqIdGrIFQh-EsSZ9_4ohTX11DirXTmHX-T2_xcHgTHGqTWjrMKhSIrxgyQTrgZmHYNIlN4Hwn4ikyg88_s1pNk9elHTBkh0G2SLV77olBZRgUOcmDUj_SGPKGqgIHjDVaAvJYy9kKU-nB-Z8hIu4HQIIwE5GUk18PGv_gK9DHTRUVwgjofEWlh6uBY-KRZtQAZe6rtib4pNfNHThw3EWZjad6KSH_le5vthEqCxKl9dsgFJ" />
            </div>
            <div className="py-8 px-4 flex justify-between items-end">
              <div>
                <h3 className="font-serif text-3xl text-white scroll-reveal">The Royal Set</h3>
                <p className="text-primary/50 text-xs uppercase tracking-widest mt-2 scroll-reveal">Necklace &amp; Earrings</p>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl opacity-0 group-hover:opacity-100 transition-opacity">arrow_right_alt</span>
            </div>
          </div>
          <div className="glass-card-premium p-4 group scroll-reveal stagger-2 mt-12 md:mt-24 animate-float tilt-card">
            <div className="overflow-hidden rounded-lg">
              <img alt="The Celestial Collection" className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1CDQqg-qfOmuydZ-kh_0on-jGrZh4iV5tM3aME21qulQr9Qg1OztcQohIzqXPAsa_xZtHPaJdLnI-3oqBKlA9ToidO8HUabmZLkiYBWO673nB9EGFmhXjKeNMsWNxScZXPXv5v15ujdEpTCc8N2x3vimZRcGzzmEhdU-f1LE7SY2UbFrWfbzsh1oBL11iQ6DzjULp6527FL6i3gQ96cVawfoawmSHI4F8t7g5kc-J1pIPrBMktw8RrQAtTLDW7mQ12iA7ULTBWjSB" />
            </div>
            <div className="py-8 px-4 flex justify-between items-end">
              <div>
                <h3 className="font-serif text-3xl text-white scroll-reveal">Celestial Glow</h3>
                <p className="text-primary/50 text-xs uppercase tracking-widest mt-2 scroll-reveal">Ring &amp; Bracelet</p>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl opacity-0 group-hover:opacity-100 transition-opacity">arrow_right_alt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedSets;
