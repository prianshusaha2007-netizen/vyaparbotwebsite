import React from 'react';
import { motion } from 'framer-motion';
import { Clock, UserX, MessageSquareWarning, TrendingDown, Layers, BrainCircuit } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: "Too much manual work",
    desc: "Hours wasted on repetitive tasks instead of growth."
  },
  {
    icon: BrainCircuit,
    title: "Zero automation",
    desc: "Everything depends on you, creating a bottleneck."
  },
  {
    icon: UserX,
    title: "Lost customers",
    desc: "No follow-up system leads to missed revenue."
  },
  {
    icon: MessageSquareWarning,
    title: "WhatsApp dependency",
    desc: "Scattered communications across personal chats."
  },
  {
    icon: Layers,
    title: "App overload",
    desc: "5–7 different apps needed just to run operations."
  },
  {
    icon: TrendingDown,
    title: "High workload, low growth",
    desc: "Working hard but business isn't scaling."
  }
];

const Problem = () => {
  return (
    <section className="py-32 bg-royal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Real Problem <span className="text-gold-400">Indian Businesses</span> Face
          </h2>
          <div className="h-1.5 w-24 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-royal-900/40 p-8 rounded-3xl border border-royal-800 hover:border-gold-500/50 transition-all duration-300 hover:bg-royal-800/40 hover:shadow-2xl hover:shadow-gold-900/10"
            >
              <div className="bg-gradient-to-br from-royal-800 to-royal-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-royal-700 shadow-lg">
                <item.icon className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-emerald-100/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
