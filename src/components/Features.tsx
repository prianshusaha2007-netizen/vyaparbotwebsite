import React from 'react';
import { FileText, Users, Package, BarChart3, Megaphone, Star, Calendar, Search, Globe, WifiOff, Mic, LayoutDashboard } from 'lucide-react';

const features = [
  { icon: FileText, title: "AI Billing & Invoicing", desc: "Create professional invoices instantly via chat." },
  { icon: Users, title: "AI CRM & Follow-ups", desc: "Auto-send WhatsApp reminders to customers." },
  { icon: Package, title: "AI Inventory", desc: "Smart stock alerts and management." },
  { icon: Users, title: "AI Staff Management", desc: "Track attendance and performance automatically." },
  { icon: Megaphone, title: "AI Marketing & SEO", desc: "Auto-generate ads and optimize online presence." },
  { icon: Star, title: "Review Automation", desc: "Collect and manage customer reviews on autopilot." },
  { icon: BarChart3, title: "Business Insights", desc: "Deep analytics on sales, growth, and trends." },
  { icon: Calendar, title: "AI Daily Planner", desc: "Smart scheduling for maximum productivity." },
  { icon: Search, title: "Competitor Analysis", desc: "Stay ahead with AI-driven market intel." },
  { icon: Globe, title: "Multi-branch Dashboard", desc: "Manage all your outlets from one screen." },
  { icon: WifiOff, title: "Offline Mode", desc: "Work without internet, sync when online." },
  { icon: Mic, title: "Voice Commands", desc: "Support for multiple Indian languages." },
];

const Features = () => {
  return (
    <section id="features" className="py-32 bg-royal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to <span className="text-gold-400">Run Your Business</span>
          </h2>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            Replace 5-7 different apps with one powerful AI assistant. Designed for speed, simplicity, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-royal-900/30 p-8 rounded-2xl border border-royal-800 hover:bg-royal-800 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-royal-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300 shadow-inner">
                <feature.icon className="w-7 h-7 text-gold-400 group-hover:text-royal-950 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">{feature.title}</h3>
              <p className="text-emerald-100/50 text-sm leading-relaxed group-hover:text-emerald-100/80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
