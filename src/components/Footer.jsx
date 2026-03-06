import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background-dark py-12 px-6 lg:px-20 border-t border-primary/10 pt-16 md:pt-24 pb-12">
      <div className="mx-auto flex max-w-[1440px] flex-col md:flex-row items-center justify-between gap-8 md:gap-8">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-xl md:text-2xl">diamond</span>
          <h2 className="font-serif text-lg md:text-xl font-bold tracking-widest text-primary shimmer-gold scroll-reveal">AURUM</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-100/40">
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms</a>
          <a className="hover:text-primary transition-colors" href="#">Boutiques</a>
          <a className="hover:text-primary transition-colors" href="#">Press</a>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-primary/60 cursor-pointer hover:text-primary text-xl">share</span>
          <span className="material-symbols-outlined text-primary/60 cursor-pointer hover:text-primary text-xl">language</span>
        </div>
      </div>
      <div className="mt-12 md:mt-8 text-center text-[10px] text-slate-100/20 uppercase tracking-[0.2em]">
        © 2024 AURUM Luxury Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
