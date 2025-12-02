import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Demo from './components/Demo';
import EntrepreneurHero from './components/EntrepreneurHero';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-royal-950 text-white selection:bg-gold-500/30 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Demo />
        <EntrepreneurHero />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
