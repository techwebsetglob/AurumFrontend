import React from 'react';

const Consultation = () => {
  return (
    <section className="bg-background-dark section-spacing px-6 lg:px-20 border-t border-primary/5 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="scroll-reveal">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-primary mb-6 md:mb-8 shimmer-gold scroll-reveal">Private <br/><span className="italic">Consultation</span></h2>
            <p className="text-slate-100/60 text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-md scroll-reveal">Embark on a journey of bespoke creation. Our master jewelers are available for private appointments to bring your vision to life.</p>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                <div>
                  <h4 className="text-slate-100 font-bold uppercase tracking-widest text-sm mb-2 scroll-reveal">Mumbai Flagship</h4>
                  <p className="text-slate-100/40 text-sm leading-relaxed scroll-reveal">The Grand Atrium, Altamount Road<br/>Mumbai, Maharashtra 400026</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                <div>
                  <h4 className="text-slate-100 font-bold uppercase tracking-widest text-sm mb-2 scroll-reveal">Concierge Services</h4>
                  <p className="text-slate-100/40 text-sm scroll-reveal">concierge.mumbai@aurum.luxury</p>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-reveal stagger-2">
            <div className="glass-card-premium p-6 md:p-10 rounded-xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-primary/60 ml-4">Name</label>
                    <input className="bg-white/5 border border-primary/20 rounded-full px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Alexander Sterling" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-primary/60 ml-4">Email</label>
                    <input className="bg-white/5 border border-primary/20 rounded-full px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="alex@example.com" type="email" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-primary/60 ml-4">Message</label>
                  <textarea className="bg-white/5 border border-primary/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell us about your masterpiece vision..." rows={4}></textarea>
                </div>
                <button className="btn-lux-primary w-full text-black btn-text-lux uppercase py-5 rounded-full text-[10px] transition-all" type="submit">
                  Request Invitation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Consultation;
