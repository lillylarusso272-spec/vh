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
            <h3 className="text-3xl font-bold mb-8 text-center text-yellow-300">
              🌍 Import Talent From These Countries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Pakistan', flag: '🇵🇰', image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Bangladesh', flag: '🇧🇩', image: 'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Bhutan', flag: '🇧🇹', image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Philippines', flag: '🇵🇭', image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Kenya', flag: '🇰🇪', image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Nepal', flag: '🇳🇵', image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' }
              ].map((country, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105 group">
                  <div className="mb-3">
                    <img 
                      src={country.image} 
                      alt={`${country.name} landscape`}
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{country.flag}</div>
                  </div>
                  <h4 className="font-bold text-sm text-yellow-200 group-hover:text-white transition-colors">{country.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Export Countries */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-green-300">
              🚀 Export Talent To These Countries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Saudi Arabia', flag: '🇸🇦', image: 'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Oman', flag: '🇴🇲', image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Qatar', flag: '🇶🇦', image: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Maldives', flag: '🇲🇻', image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'UAE', flag: '🇦🇪', image: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Japan', flag: '🇯🇵', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
                { name: 'Bahrain', flag: '🇧🇭', image: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' }
              ].map((country, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105 group">
                  <div className="mb-3">
                    <img 
                      src={country.image} 
                      alt={`${country.name} landscape`}
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{country.flag}</div>
                  </div>
                  <h4 className="font-bold text-sm text-green-200 group-hover:text-white transition-colors">{country.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => {
              const phoneNumber = '+923187203522';
              const message = 'Hello! I am interested in your talent import/export services. Can you provide more details about the process and requirements?';
              const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(url, '_blank');
            }}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 hover:text-blue-900 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            🤝 Connect for Talent Services
          </button>
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