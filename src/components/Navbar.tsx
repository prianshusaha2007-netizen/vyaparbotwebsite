import React, { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const whatsappUrl = "https://wa.me/919874199454?text=Hi%2C%20I%27m%20interested%20in%20early%20access%20to%20Vyapar.bot";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-royal-950/90 backdrop-blur-md border-b border-royal-800 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-2 rounded-xl shadow-lg shadow-gold-500/20">
              <Bot className="w-6 h-6 text-royal-950" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Vyapar<span className="text-gold-400">.bot</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-emerald-100/80 hover:text-gold-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-royal-950 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transform hover:-translate-y-0.5 inline-block"
              >
                Join Early Access
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-100 hover:text-gold-400 p-2 transition-colors"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-royal-900 border-b border-royal-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-emerald-100 hover:text-gold-400 block px-3 py-3 rounded-lg text-base font-medium hover:bg-royal-800/50 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-gold-400 to-gold-600 text-royal-950 px-3 py-3 rounded-lg text-base font-bold mt-4 shadow-lg"
              >
                Join Early Access
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
