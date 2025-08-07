import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickAssessment from './components/QuickAssessment';
import About from './components/About';
import Services from './components/Services';
import Countries from './components/Countries';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import UniversityLogos from './components/UniversityLogos';

const HomePage = () => (
  <>
    <Hero />
    <QuickAssessment />
    {/* Talent Import/Export Section integrated into homepage */}
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Talent Import & Export Services
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-200 max-w-4xl mx-auto">
            Bridging global talent gaps with our comprehensive import and export services. 
            Connecting skilled professionals with international opportunities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Import Countries */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              🌍 Find Talent In These Countries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Pakistan', flag: '🇵🇰' },
                { name: 'Bangladesh', flag: '🇧🇩' },
                { name: 'Bhutan', flag: '🇧🇹' },
                { name: 'Philippines', flag: '🇵🇭' },
                { name: 'Kenya', flag: '🇰🇪' },
                { name: 'Nepal', flag: '🇳🇵' }
              ].map((country, index) => (
                <div key={index} className="bg-blue-800/50 p-4 rounded-xl text-center hover:bg-blue-700/50 transition-colors cursor-pointer">
                  <div className="text-3xl mb-2">{country.flag}</div>
                  <h4 className="font-semibold text-sm">{country.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Export Countries */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              🚀 Export Talent To These Countries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Saudi Arabia', flag: '🇸🇦' },
                { name: 'Oman', flag: '🇴🇲' },
                { name: 'Qatar', flag: '🇶🇦' },
                { name: 'Maldives', flag: '🇲🇻' },
                { name: 'UAE', flag: '🇦🇪' },
                { name: 'Japan', flag: '🇯🇵' },
                { name: 'Bahrain', flag: '🇧🇭' }
              ].map((country, index) => (
                <div key={index} className="bg-green-800/50 p-4 rounded-xl text-center hover:bg-green-700/50 transition-colors cursor-pointer">
                  <div className="text-3xl mb-2">{country.flag}</div>
                  <h4 className="font-semibold text-sm">{country.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <About />
    <Services />
    <Countries />
    <UniversityLogos />
    <Testimonials />
    <Contact />
  </>
);
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;