import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-4 lg:px-20 transition-all duration-300 glass-nav">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <div className="flex items-center gap-4 md:gap-12 w-full lg:w-auto justify-between lg:justify-start">
          {/* Mobile Menu Button - Left aligned on mobile */}
          <button 
            className="lg:hidden text-primary focus:outline-none z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          {/* Logo - Centered on mobile, absolute positioned */}
          <div className="flex items-center gap-2 text-primary lg:relative lg:translate-x-0 absolute left-1/2 -translate-x-1/2 lg:left-auto">
            <span className="material-symbols-outlined text-2xl md:text-3xl">diamond</span>
            <h2 className="font-serif text-xl md:text-2xl font-bold tracking-widest text-primary shimmer-gold scroll-reveal active">AURUM</h2>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <a className="text-xs font-medium uppercase tracking-[0.2em] text-slate-100 hover:text-primary transition-colors nav-link-effect" href="#">Collections</a>
            <a className="text-xs font-medium uppercase tracking-[0.2em] text-slate-100 hover:text-primary transition-colors nav-link-effect" href="#">Bespoke</a>
            <a className="text-xs font-medium uppercase tracking-[0.2em] text-slate-100 hover:text-primary transition-colors nav-link-effect" href="#">Heritage</a>
            <a className="text-xs font-medium uppercase tracking-[0.2em] text-slate-100 hover:text-primary transition-colors nav-link-effect" href="#">High Jewelry</a>
          </nav>
        </div>

        {/* Right side icons - Hidden on mobile if needed, or adjust spacing */}
        <div className="flex items-center gap-4 md:gap-6 z-50 relative">
          <div className="relative hidden xl:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/70 text-sm">search</span>
            <input className="h-10 w-48 rounded-full border border-primary/20 bg-black/60 pl-10 text-xs text-white placeholder-primary/50 focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search Masterpieces" type="text" />
          </div>
          <button className="hidden md:flex btn-lux-primary h-10 items-center justify-center rounded-lg px-6 text-[10px] btn-text-lux uppercase text-emerald-deep transition-all scroll-reveal">
            Concierge
          </button>
          <button className="relative flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-black/60 border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all">
            <span className="material-symbols-outlined text-lg md:text-xl">shopping_bag</span>
          </button>
          <div className="h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-full border border-primary/40 hidden sm:block">
            <img className="h-full w-full object-cover" alt="Profile photo of a high-end client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeGKHx1u6O4bjgJ7DhbhesE0hbsRqBxYZkSMen-4XOc3jMkBodqLvdU9ggh4K88zcdcVZDwJj5O4AHp2TZWDaRGE7GDwE81pOErfCIGnWiSmAxIJsaBMqAcHlEg1pybbL9NszrU-uYuNKu8U_lBq1ulMH4ggE8s3qi1n8xtvdfVqYspDxV2TucglWo1XEwWHPLPC7yEtvu9PSBnB2M2sG_914I3hAE5bnbWfvvDqexu12kmEboG23famCQ-SXzJDtkGZaviaEPgWuG" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Full Screen Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-0 pt-24 bg-black/95 backdrop-blur-xl transition-all duration-400 ease-in-out z-40 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full pb-32 gap-8 text-center">
          <a className="text-sm font-bold uppercase tracking-[0.3em] text-slate-100/90 hover:text-primary transition-colors hover:scale-110 transform" href="#">Collections</a>
          <a className="text-sm font-bold uppercase tracking-[0.3em] text-slate-100/90 hover:text-primary transition-colors hover:scale-110 transform" href="#">Bespoke</a>
          <a className="text-sm font-bold uppercase tracking-[0.3em] text-slate-100/90 hover:text-primary transition-colors hover:scale-110 transform" href="#">Heritage</a>
          <a className="text-sm font-bold uppercase tracking-[0.3em] text-slate-100/90 hover:text-primary transition-colors hover:scale-110 transform" href="#">High Jewelry</a>
          <div className="w-12 h-[1px] bg-primary/30 my-4"></div>
          <a className="text-sm font-bold uppercase tracking-[0.3em] text-primary" href="#">Concierge</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
