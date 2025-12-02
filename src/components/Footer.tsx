import React from 'react';
import { Bot, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-royal-950 border-t border-royal-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-br from-gold-400 to-gold-600 p-2 rounded-lg">
                <Bot className="w-6 h-6 text-royal-950" />
              </div>
              <span className="text-2xl font-bold text-white">
                Vyapar<span className="text-gold-400">.bot</span>
              </span>
            </div>
            <p className="text-emerald-100/60 text-sm leading-relaxed mb-6">
              Your 24/7 AI Employee helping Indian businesses automate operations and grow faster.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-sm text-emerald-100/60">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-sm text-emerald-100/60">
              <li><a href="#" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-sm text-emerald-100/60">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-royal-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-emerald-100/40 text-sm">
            © 2025 Vyapar.bot. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-emerald-100/40 hover:text-gold-400 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-emerald-100/40 hover:text-gold-400 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-emerald-100/40 hover:text-gold-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-emerald-100/40 hover:text-gold-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
