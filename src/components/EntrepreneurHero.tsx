import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Palette, FileText, Megaphone, DollarSign, Calendar, Heart, ArrowRight, Sparkles } from 'lucide-react';

const highlights = [
  { icon: Rocket, text: "AI Startup Builder" },
  { icon: Palette, text: "AI Branding Suite" },
  { icon: FileText, text: "AI Business Plan" },
  { icon: Megaphone, text: "AI Marketing Coach" },
  { icon: DollarSign, text: "AI Finance Assistant" },
  { icon: Calendar, text: "AI Founder Planner" },
  { icon: Heart, text: "Founder Support AI" },
];

const EntrepreneurHero = () => {
  const whatsappUrl = "https://wa.me/919874199454?text=Hi%2C%20I%27m%20interested%20in%20the%20Entrepreneurship%20Deal%20for%20%E2%82%B929";

  return (
    <section className="relative py-24 overflow-hidden bg-royal-950 text-white">
      {/* Background Effects - Royal Green & Gold Theme */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-bold mb-6 backdrop-blur-md">
                <Sparkles className="w-4 h-4" />
                <span className="uppercase tracking-wider">The Entrepreneurship Deal</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Start Your Business Journey With Your Own <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">AI Co-Founder</span>
                <br />
                <span className="text-3xl md:text-5xl text-emerald-50/90 mt-2 block">For Just <span className="text-gold-400">₹29</span></span>
              </h2>

              <p className="text-xl text-emerald-100/80 mb-4 font-medium">
                Empowering India’s next generation of entrepreneurs, creators, and innovators.
              </p>
              
              <p className="text-emerald-100/60 mb-8 leading-relaxed max-w-2xl">
                Whether you are a student, freelancer, dreamer, or early founder — Vyapar.bot gives you a fully intelligent AI Co-Founder who helps you ideate, plan, research, market, brand, and launch your business with confidence. <span className="text-white font-medium">All for the price of a cup of chai.</span>
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-royal-800 p-1.5 rounded-lg border border-royal-700">
                      <item.icon className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="text-emerald-50/90 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-royal-950 rounded-xl font-bold text-lg transition-all shadow-lg shadow-gold-500/25 flex items-center justify-center gap-2 group transform hover:-translate-y-1"
                >
                  Start for ₹29
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#pricing"
                  className="px-8 py-4 bg-royal-800/30 hover:bg-royal-800/50 text-white rounded-xl font-semibold text-lg transition-all border border-royal-700 backdrop-blur-sm flex items-center justify-center hover:border-gold-500/30"
                >
                  See What’s Included
                </a>
              </div>
              
              <p className="mt-6 text-sm text-emerald-100/40 font-medium">
                Build your dream business with AI — no MBA, no big budget, no team needed.
              </p>
            </motion.div>
          </div>

          {/* Visual Content */}
          <div className="lg:w-2/5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-emerald-500/20 rounded-[2rem] blur-2xl transform rotate-6"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-royal-700 shadow-2xl bg-royal-900">
                <img 
                  src="https://images.unsplash.com/photo-1531297461136-82lw9z2d3b7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Future Entrepreneur" 
                  className="w-full h-auto object-cover opacity-90 mix-blend-overlay hover:mix-blend-normal transition-all duration-700"
                />
                
                {/* Floating UI Elements */}
                <div className="absolute top-6 right-6 bg-royal-950/80 backdrop-blur-md p-4 rounded-xl border border-gold-500/30 shadow-xl max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gold-400 font-mono uppercase">AI Co-Founder</span>
                  </div>
                  <p className="text-white text-sm font-medium">"I've generated 3 logo concepts for your startup. Want to see them?"</p>
                </div>

                <div className="absolute bottom-6 left-6 bg-gradient-to-r from-royal-800 to-royal-900 p-4 rounded-xl shadow-xl border border-royal-700 flex items-center gap-3">
                  <div className="bg-gold-500/20 p-2 rounded-lg">
                    <Rocket className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-emerald-100/60 text-xs font-bold uppercase">Launch Readiness</p>
                    <p className="text-white text-lg font-bold">94%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider Sentence */}
        <div className="mt-20 text-center">
          <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-gold-500/30 to-transparent mb-6"></div>
          <p className="text-emerald-100/60 text-lg font-light tracking-wide">
            From idea to launch — your entire startup journey, automated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EntrepreneurHero;
