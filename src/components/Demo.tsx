import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send, Bot } from 'lucide-react';

const messages = [
  { type: 'user', text: "Make invoice for Ramesh for ₹450." },
  { type: 'bot', text: "Done! Invoice #INV-2024-001 for ₹450 generated for Ramesh. Sending via WhatsApp now..." },
  { type: 'user', text: "Why is my sales low this week?" },
  { type: 'bot', text: "Analysis shows 20% drop in repeat customers. I suggest sending a discount offer to your top 50 customers. Shall I do it?" },
  { type: 'user', text: "Yes, send it." },
  { type: 'bot', text: "Offer sent! 🚀" }
];

const Demo = () => {
  const [visibleMessages, setVisibleMessages] = useState<typeof messages>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    
    const showNextMessage = () => {
      if (currentIndex >= messages.length) {
        setTimeout(() => {
            setVisibleMessages([]);
            currentIndex = 0;
            showNextMessage();
        }, 5000);
        return;
      }

      const msg = messages[currentIndex];
      
      if (msg.type === 'bot') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(prev => [...prev, msg]);
          currentIndex++;
          setTimeout(showNextMessage, 1500);
        }, 1500);
      } else {
        setVisibleMessages(prev => [...prev, msg]);
        currentIndex++;
        setTimeout(showNextMessage, 1000);
      }
    };

    showNextMessage();
  }, []);

  return (
    <section id="demo" className="py-32 bg-royal-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Talk to Vyapar.bot Like You Talk to an <span className="text-gold-400">Employee</span>
          </h2>
          <p className="text-emerald-100/60 text-lg">No complicated menus. Just chat or speak.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-royal-950 rounded-[2rem] border border-royal-800 shadow-2xl overflow-hidden ring-1 ring-white/5">
            {/* Chat Header */}
            <div className="bg-royal-900 p-6 flex items-center gap-4 border-b border-royal-800">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg">
                <Bot className="w-7 h-7 text-royal-950" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Vyapar.bot</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-emerald-100/60">Online • AI Assistant</span>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="h-[500px] p-8 overflow-y-auto flex flex-col gap-6 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
              <AnimatePresence>
                {visibleMessages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-5 rounded-2xl shadow-md ${
                        msg.type === 'user'
                          ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-royal-950 font-medium rounded-tr-sm'
                          : 'bg-royal-800 text-emerald-50 rounded-tl-sm border border-royal-700'
                      }`}
                    >
                      <p className="leading-relaxed">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-royal-800 p-5 rounded-2xl rounded-tl-sm border border-royal-700 flex gap-1.5">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input Area */}
            <div className="p-6 bg-royal-900 border-t border-royal-800">
              <div className="flex items-center gap-3 bg-royal-950 p-2 rounded-full border border-royal-800 focus-within:border-gold-500/50 transition-colors shadow-inner">
                <button className="p-3 hover:bg-royal-800 rounded-full text-emerald-400 hover:text-gold-400 transition-colors">
                  <Mic className="w-6 h-6" />
                </button>
                <input 
                  type="text" 
                  placeholder="Type a command or ask a question..." 
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-emerald-700 px-2 text-lg"
                  disabled
                />
                <button className="p-3 bg-gold-500 hover:bg-gold-600 rounded-full text-royal-950 transition-colors shadow-lg">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
