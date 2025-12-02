import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, PlayCircle } from 'lucide-react';

const Hero = () => {
  const whatsappUrl = "https://wa.me/919874199454?text=Hi%2C%20I%27m%20interested%20in%20early%20access%20to%20Vyapar.bot";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-royal-950 pt-20">
      {/* Luxurious Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        {/* Golden Glow */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px]" />
        {/* Deep Emerald Glow */}
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal-900/50 border border-royal-700/50 mb-8 backdrop-blur-md shadow-xl">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-emerald-100 font-medium tracking-wide">The Future of Indian Business</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Vyapar<span className="text-gold-400">.bot</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-emerald-200">
              Your 24/7 AI Employee
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-emerald-100/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Automate billing, CRM, inventory, marketing & daily operations with the 
            <span className="text-gold-400 font-medium"> precision of AI</span> and the 
            <span className="text-gold-400 font-medium"> ease of a conversation</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-royal-950 rounded-full font-bold text-lg transition-all shadow-lg shadow-gold-500/25 flex items-center justify-center gap-2 group transform hover:-translate-y-1"
            >
              Join Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="w-full sm:w-auto px-10 py-4 bg-royal-800/30 hover:bg-royal-800/50 text-white rounded-full font-semibold text-lg transition-all border border-royal-700 backdrop-blur-sm flex items-center justify-center gap-3 hover:border-gold-500/50">
              <PlayCircle className="w-5 h-5 text-gold-400" />
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Floating Elements / Dashboard Preview Hint */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-50"></div>
          <div className="relative bg-royal-900/40 border border-royal-700/50 rounded-2xl p-2 backdrop-blur-sm">
             <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Dashboard Preview" 
              className="rounded-xl w-full shadow-2xl opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-transparent to-transparent rounded-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
