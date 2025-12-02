import React, { useState } from 'react';
import { Check, Sparkles, Zap, Utensils, Hotel, Truck, Store, Info, ArrowRight, Rocket, Lightbulb, Palette, HeartHandshake, Target, BrainCircuit, Calendar, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'modular' | 'bundles'>('modular');

  const tiers = [
    {
      name: "Basic Features",
      price: "29",
      color: "border-emerald-500/30 bg-emerald-900/10",
      iconColor: "text-emerald-400",
      description: "For freelancers & small shops",
      features: [
        "Smart Billing / Invoice Generator",
        "Customer CRM (Basic)",
        "Expenses Tracking",
        "Notes & Reminders",
        "Basic Reports"
      ]
    },
    {
      name: "Standard Features",
      price: "39",
      color: "border-gold-500/30 bg-gold-900/10",
      iconColor: "text-gold-400",
      description: "For growing businesses",
      features: [
        "Inventory Management",
        "Stock Alerts + Auto Purchase",
        "Auto WhatsApp Follow-ups",
        "Review Booster (Google)",
        "Staff & Attendance"
      ]
    },
    {
      name: "Premium Features",
      price: "59",
      color: "border-purple-500/30 bg-purple-900/10",
      iconColor: "text-purple-400",
      description: "High-value automation",
      features: [
        "AI Growth Suite (SEO, Ads)",
        "Hotel PMS System",
        "Restaurant POS & KOT",
        "Dropshipping Engine",
        "Multi-Branch Dashboard"
      ]
    }
  ];

  const bundles = [
    {
      name: "Retail Bundle",
      icon: Store,
      price: "195",
      features: ["AI Pack", "Billing", "Inventory", "CRM", "Auto WhatsApp"]
    },
    {
      name: "Salon & Clinic",
      icon: Sparkles,
      price: "215",
      features: ["AI Pack", "Appointments", "CRM", "Auto WhatsApp", "Review Booster"]
    },
    {
      name: "Restaurant",
      icon: Utensils,
      price: "245",
      features: ["AI Pack", "POS System", "KOT", "Inventory", "Staff Mgmt"]
    },
    {
      name: "Hotel PMS",
      icon: Hotel,
      price: "245",
      features: ["AI Pack", "PMS", "Housekeeping", "Staff Mgmt", "Inventory"]
    },
    {
      name: "Dropshipping",
      icon: Truck,
      price: "186",
      features: ["AI Pack", "Dropshipping Engine", "CRM Pro", "Auto WhatsApp"]
    }
  ];

  const entrepreneurFeatures = [
    { icon: Rocket, title: "AI Startup Builder", desc: "Validate ideas, check competition & create roadmaps." },
    { icon: Target, title: "AI Business Plan", desc: "Generate pitch decks, SWOT & GTM strategy." },
    { icon: Palette, title: "AI Branding Suite", desc: "Logo ideas, color palettes & brand tone." },
    { icon: Lightbulb, title: "AI Marketing Coach", desc: "Social content calendar, ad copy & strategy." },
    { icon: BrainCircuit, title: "AI Financial Coach", desc: "Pricing strategy, break-even & profit modeling." },
    { icon: Calendar, title: "AI Productivity Assistant", desc: "Daily planning, routines & task reminders." },
    { icon: Smile, title: "Founder Mindset AI", desc: "Emotional support, stress mgmt & motivation." },
  ];

  const entrepreneurWhatsappUrl = "https://wa.me/919874199454?text=Hi%2C%20I%27m%20interested%20in%20the%20Entrepreneurship%20Deal%20for%20%E2%82%B929";

  return (
    <section id="pricing" className="py-32 bg-royal-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gold-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Build Your <span className="text-gold-400">Perfect Plan</span>
          </h2>
          <p className="text-emerald-100/60 text-lg max-w-2xl mx-auto">
            Our modular pricing ensures you only pay for what you need. Start with the AI Core, then add features or choose a bundle.
          </p>
          
          {/* Toggle */}
          <div className="flex justify-center mt-10">
            <div className="bg-royal-900/50 p-1.5 rounded-full border border-royal-800 inline-flex">
              <button
                onClick={() => setActiveTab('modular')}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === 'modular' 
                    ? 'bg-gold-500 text-royal-950 shadow-lg' 
                    : 'text-emerald-100/60 hover:text-white'
                }`}
              >
                Build Your Own
              </button>
              <button
                onClick={() => setActiveTab('bundles')}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === 'bundles' 
                    ? 'bg-gold-500 text-royal-950 shadow-lg' 
                    : 'text-emerald-100/60 hover:text-white'
                }`}
              >
                Industry Bundles
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'modular' ? (
          <div className="space-y-12">
            {/* Step 1: The Core */}
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-gold-500 text-royal-950 flex items-center justify-center font-bold">1</div>
                <h3 className="text-2xl font-bold text-white">The Foundation <span className="text-sm font-normal text-emerald-100/50 ml-2">(Compulsory)</span></h3>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative bg-gradient-to-r from-royal-900 to-royal-800 rounded-3xl p-1 border border-gold-500/50 shadow-2xl shadow-gold-900/20"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-royal-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Required Core
                </div>
                <div className="bg-royal-950/50 rounded-[22px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 backdrop-blur-sm">
                  <div className="flex-1">
                    <h4 className="text-3xl font-bold text-white mb-2">AI Starter Pack</h4>
                    <p className="text-emerald-100/70 mb-6">The brain of your business. Activates your AI employee.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                      {['Human-like AI Chatbot', 'AI Voice Assistant', 'AI Daily Planner', 'Business Insights', '5,000 AI Messages/mo'].map(feat => (
                        <div key={feat} className="flex items-center gap-3">
                          <div className="bg-gold-500/20 p-1 rounded-full">
                            <Check className="w-3 h-3 text-gold-400" />
                          </div>
                          <span className="text-emerald-50 text-sm">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center md:text-right min-w-[150px]">
                    <div className="text-5xl font-bold text-gold-400 mb-1">₹49</div>
                    <div className="text-emerald-100/50 text-sm">per month</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Step 2: The Modules */}
            <div>
              <div className="flex items-center gap-4 mb-8 max-w-4xl mx-auto">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">2</div>
                <h3 className="text-2xl font-bold text-white">Add Feature Packs <span className="text-sm font-normal text-emerald-100/50 ml-2">(Pick at least 2)</span></h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tiers.map((tier, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-3xl p-8 border ${tier.color} hover:bg-royal-800/50 transition-all duration-300 flex flex-col`}
                  >
                    <h4 className={`text-xl font-bold ${tier.iconColor} mb-2`}>{tier.name}</h4>
                    <p className="text-emerald-100/50 text-sm mb-6 h-10">{tier.description}</p>
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-4xl font-bold text-white">₹{tier.price}</span>
                      <span className="text-emerald-100/40 text-sm">/mo</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-1">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-emerald-100/80 text-sm">
                          <Check className={`w-4 h-4 ${tier.iconColor} mt-0.5 shrink-0`} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-royal-800 hover:bg-royal-700 text-white font-semibold transition-colors border border-royal-700 text-sm">
                      Add Pack
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Bundles Tab */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {bundles.map((bundle, idx) => (
              <div key={idx} className="group bg-royal-900/40 rounded-3xl p-8 border border-royal-800 hover:border-gold-500/50 transition-all duration-300 hover:bg-royal-800/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <bundle.icon className="w-24 h-24 text-gold-400" />
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-royal-800 p-3 rounded-xl border border-royal-700 group-hover:border-gold-500/30 transition-colors">
                    <bundle.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{bundle.name}</h3>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">₹{bundle.price}</span>
                    <span className="text-emerald-100/50 text-sm">/month</span>
                  </div>
                  <p className="text-emerald-100/40 text-xs mt-2">Includes AI Pack + Key Features</p>
                </div>

                <div className="space-y-3 mb-8">
                  {bundle.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 bg-royal-950/50 p-2 rounded-lg border border-royal-800/50">
                      <div className="bg-emerald-500/20 p-1 rounded-full">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-emerald-100/80 text-sm font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-royal-950 font-bold hover:from-gold-500 hover:to-gold-700 transition-all shadow-lg shadow-gold-500/10 flex items-center justify-center gap-2 group-hover:translate-y-[-2px]">
                  Choose Bundle <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </motion.div>
        )}

        {/* Entrepreneurship Deal Section */}
        <div className="mt-24 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-royal-950/90 backdrop-blur-xl"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            
            {/* Glowing Orb */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/30 rounded-full blur-[80px]"></div>

            <div className="relative p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-bold mb-6">
                  <Rocket className="w-4 h-4" />
                  <span className="uppercase tracking-wider">For Aspiring Founders</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Entrepreneurship Deal
                </h3>
                <p className="text-emerald-100/70 mb-8 text-lg leading-relaxed">
                  "Dream big. Start small. Build with AI."
                  <br/>
                  The perfect starter pack for new founders.
                  <span className="block mt-2 text-purple-300 text-sm font-medium">*Standalone Pack. No AI Base Pack required.</span>
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {entrepreneurFeatures.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <item.icon className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                      <div>
                        <h5 className="text-white font-semibold text-sm">{item.title}</h5>
                        <p className="text-emerald-100/40 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-wrap gap-2">
                    {["Students", "Early Founders", "Side Hustles", "First-time Entrepreneurs"].map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-100/50 text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>

              <div className="w-full lg:w-auto flex flex-col items-center justify-center bg-white/5 p-8 rounded-3xl border border-white/10 min-w-[280px]">
                <span className="text-emerald-100/50 text-sm font-medium mb-2">Launch your dream for</span>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-white">₹29</span>
                  <span className="text-emerald-100/50">/month</span>
                </div>
                <a 
                  href={entrepreneurWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 group"
                >
                  Start Building <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-center text-emerald-100/30 text-xs mt-4 max-w-[200px]">
                  Includes AI Startup Builder, Business Plan Gen, Branding Suite & more.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Free Tier & Footer Info */}
        <div className="mt-20 border-t border-royal-800 pt-10">
          <div className="bg-royal-900/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-royal-800">
            <div className="flex items-start gap-4">
              <div className="bg-royal-800 p-3 rounded-full">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Not ready to commit?</h4>
                <p className="text-emerald-100/60 text-sm">
                  Try our <span className="text-white font-semibold">Free Tier</span>. Get 25 AI messages, 1-time trial of all features, and basic insights.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap px-6 py-3 rounded-full border border-royal-700 text-emerald-100 hover:bg-royal-800 hover:text-white transition-colors font-medium text-sm">
              Start Free Trial
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-emerald-100/40 text-sm">
            <Info className="w-4 h-4" />
            <p>All plans include 24/7 support. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
