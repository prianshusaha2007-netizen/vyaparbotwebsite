import React from 'react';
import { Bot, CheckCircle2, TrendingUp } from 'lucide-react';

const Solution = () => {
  return (
    <section className="py-32 bg-royal-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/20 skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-bold mb-8">
              <Bot className="w-4 h-4" />
              <span className="uppercase tracking-wider">The AI Solution</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Meet <span className="text-gold-400">Vyapar.bot</span> <br />
              Your AI Business Assistant
            </h2>
            
            <p className="text-xl text-emerald-100/70 mb-10 leading-relaxed">
              Vyapar.bot reduces <span className="text-white font-semibold border-b-2 border-gold-500/50">80% of daily workload</span> by using AI voice + AI chat + automation to run operations automatically. It's not just software; it's an intelligent team member.
            </p>
            
            <div className="space-y-6">
              {[
                { text: 'Automated Operations', sub: 'Billing, Inventory & CRM on autopilot' },
                { text: 'Voice Controlled', sub: 'Speak in Hindi, English or Hinglish' },
                { text: '24/7 Availability', sub: 'Never misses a customer query' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-royal-800/50 transition-colors border border-transparent hover:border-royal-700">
                  <div className="mt-1 bg-gold-500/20 p-2 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{item.text}</h4>
                    <p className="text-emerald-100/50">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gold-500/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-gradient-to-br from-royal-800 to-royal-950 p-2 rounded-3xl border border-royal-700 shadow-2xl">
              <div className="bg-royal-950 rounded-2xl overflow-hidden relative">
                 <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                  alt="AI Assistant Dashboard" 
                  className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Floating Card */}
                <div className="absolute bottom-10 left-10 right-10 bg-royal-900/95 backdrop-blur-xl p-6 rounded-2xl border border-gold-500/30 shadow-2xl">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg">
                            <Bot className="w-7 h-7 text-royal-950" />
                        </div>
                        <div className="flex-1">
                            <p className="text-white font-medium text-lg">"Inventory updated. 15 invoices sent."</p>
                            <div className="flex items-center gap-2 mt-1">
                                <TrendingUp className="w-4 h-4 text-green-400" />
                                <p className="text-emerald-100/50 text-sm">Efficiency up by 45% today</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
