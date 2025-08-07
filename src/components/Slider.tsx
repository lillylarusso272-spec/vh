import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Home, Briefcase, Plane, Star } from 'lucide-react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const openWhatsApp = (message: string) => {
    const phoneNumber = '+923187203522';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  const slides = [
    {
      id: 1,
      title: "Study Abroad",
      subtitle: "Your Gateway to World-Class Education",
      description: "Unlock opportunities at top universities worldwide with our expert guidance and comprehensive support services.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      icon: GraduationCap,
      cta: "Explore Programs",
      features: ["Top Universities", "Scholarship Guidance", "Visa Support", "Career Counseling"]
    },
    {
      id: 2,
      title: "Immigration Settlement",
      subtitle: "Make Your New Country Home",
      description: "Complete settlement services to help you establish your new life with confidence and ease.",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      icon: Home,
      cta: "Start Settlement",
      features: ["PR Applications", "Family Reunification", "Settlement Support", "Legal Assistance"]
    },
    {
      id: 3,
      title: "Gulf Europe Work",
      subtitle: "Advance Your Career Internationally",
      description: "Professional work visa services for Gulf countries and Europe with guaranteed job placement assistance.",
      image: "https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      icon: Briefcase,
      cta: "Find Jobs",
      features: ["Job Placement", "Work Permits", "Employer Liaison", "Career Growth"]
    },
    {
      id: 4,
      title: "Travel Abroad",
      subtitle: "Explore the World with Confidence",
      description: "Tourist and visitor visa services to make your travel dreams a reality with hassle-free processing.",
      image: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      icon: Plane,
      cta: "Plan Travel",
      features: ["Tourist Visas", "Travel Insurance", "Itinerary Planning", "24/7 Support"]
    },
    {
      id: 5,
      title: "Google Reviews",
      subtitle: "Trusted by 5000+ Happy Clients",
      description: "Join thousands of satisfied clients who achieved their dreams with our expert consultation services.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      icon: Star,
      cta: "Read Reviews",
      features: ["5000+ Clients", "95% Success Rate", "Expert Team", "24/7 Support"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`text-white transform transition-all duration-1000 delay-300 ${
                    index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}>
                    <div className="flex items-center mb-6">
                      <div className="bg-red-600 p-4 rounded-full mr-4">
                        <slide.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h1 className="text-5xl lg:text-6xl font-bold mb-2">{slide.title}</h1>
                        <p className="text-xl text-red-400 font-semibold">{slide.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {slide.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => openWhatsApp(`Hello! I'm interested in ${slide.title} services. Please provide more information.`)}
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        {slide.cta}
                      </button>
                      <button 
                        onClick={() => openWhatsApp(`Hi! I would like to learn more about ${slide.title}. Can you help me?`)}
                        className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Stats/Info Panel */}
                  <div className={`transform transition-all duration-1000 delay-500 ${
                    index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}>
                    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                      <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Success Rate</span>
                          <span className="text-2xl font-bold text-green-400">95%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Happy Clients</span>
                          <span className="text-2xl font-bold text-blue-400">5000+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Countries Served</span>
                          <span className="text-2xl font-bold text-yellow-400">25+</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Years Experience</span>
                          <span className="text-2xl font-bold text-red-400">15+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-red-500 scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-red-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Slider;