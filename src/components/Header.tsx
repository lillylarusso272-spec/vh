import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4 animate-slideDown">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>(+92) 318 720 3522</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>info@haidericonsultants.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-3 h-3" />
            <span>Office 23 Kashif Plaza, Main Sanda Road Lahore</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo.jpg" 
                alt="Haideri Consultants" 
                className="h-14 w-14 rounded-full mr-3 object-cover border-2 border-red-600 shadow-lg"
              />
              <div>
                <h1 className="text-2xl font-bold text-black hover:text-red-600 transition-colors">Haideri Consultants</h1>
                <p className="text-sm text-red-600 font-medium">Your Gateway to Global Opportunities</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <div className="relative group">
                <button 
                  className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 flex items-center"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">Tourist Visa</a>
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">Student Visa</a>
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">Work Visa</a>
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">Family Visa</a>
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">Immigration</a>
                    <a href="#services" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">Documentation</a>
                  </div>
                </div>
              </div>
              <a href="#countries" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 relative group">
                Countries
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/talent-import-export" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 relative group">
                Talent Import/Export
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-110 relative group">
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-black transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Contact Us
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-600 transition-all duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 animate-slideDown">
              <nav className="flex flex-col space-y-2 bg-gray-50 rounded-lg p-4 mt-4">
                <a href="#home" className="text-gray-700 hover:text-red-600 font-medium py-3 px-4 rounded-lg hover:bg-white transition-all duration-300">Home</a>
                <a href="#about" className="text-gray-700 hover:text-red-600 font-medium py-3 px-4 rounded-lg hover:bg-white transition-all duration-300">About</a>
                <a href="#services" className="text-gray-700 hover:text-red-600 font-medium py-3 px-4 rounded-lg hover:bg-white transition-all duration-300">Services</a>
                <a href="#countries" className="text-gray-700 hover:text-red-600 font-medium py-3 px-4 rounded-lg hover:bg-white transition-all duration-300">Countries</a>
                <a href="/talent-import-export" className="text-gray-700 hover:text-red-600 font-medium py-3 px-4 rounded-lg hover:bg-white transition-all duration-300">Talent Import/Export</a>
                <a href="#testimonials" className="text-gray-700 hover:text-red-600 font-medium py-3 px-4 rounded-lg hover:bg-white transition-all duration-300">Success Stories</a>
                <a href="#contact" className="bg-red-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-black transition-all duration-300 text-center">Contact Us</a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;