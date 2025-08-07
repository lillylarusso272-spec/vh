import React from 'react';
import { Users, Globe, Briefcase, Award, ArrowRight, CheckCircle } from 'lucide-react';

const TalentImportExport = () => {
  const openWhatsApp = (service: string) => {
    const phoneNumber = '+923187203522';
    const message = `Hello! I'm interested in ${service} services. Please provide more information about your talent solutions.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const importCountries = [
    { name: 'Pakistan', flag: '🇵🇰' },
    { name: 'Bangladesh', flag: '🇧🇩' },
    { name: 'Bhutan', flag: '🇧🇹' },
    { name: 'Philippines', flag: '🇵🇭' },
    { name: 'Kenya', flag: '🇰🇪' },
    { name: 'Nepal', flag: '🇳🇵' }
  ];

  const exportCountries = [
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Oman', flag: '🇴🇲' },
    { name: 'Qatar', flag: '🇶🇦' },
    { name: 'Maldives', flag: '🇲🇻' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Bahrain', flag: '🇧🇭' }
  ];

  const services = [
    {
      icon: Users,
      title: 'Talent Sourcing',
      description: 'Connect with skilled professionals from our extensive network across multiple countries.',
      features: ['Skilled Workers', 'Technical Experts', 'Healthcare Professionals', 'IT Specialists']
    },
    {
      icon: Globe,
      title: 'International Placement',
      description: 'Strategic placement services ensuring the right talent reaches the right opportunities.',
      features: ['Job Matching', 'Cultural Integration', 'Legal Compliance', 'Ongoing Support']
    },
    {
      icon: Briefcase,
      title: 'Corporate Solutions',
      description: 'Comprehensive workforce solutions for businesses seeking international talent.',
      features: ['Bulk Recruitment', 'Contract Management', 'Training Programs', 'Quality Assurance']
    },
    {
      icon: Award,
      title: 'Certification & Training',
      description: 'Professional development and certification programs to enhance talent capabilities.',
      features: ['Skill Assessment', 'Training Programs', 'Certification', 'Career Development']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-10 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full opacity-5 animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-10 animate-float"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Talent Import & Export
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200 max-w-4xl mx-auto">
            Bridging global talent gaps with our comprehensive import and export services. 
            Connecting skilled professionals with international opportunities.
          </p>
             onClick={() => openWhatsApp('Talent Import Services')}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Find Talent
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
             onClick={() => openWhatsApp('Talent Export Opportunities')}
              Export Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Import Countries */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                Find Talent In These Countries
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {importCountries.map((country, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {country.flag}
                    </div>
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-600 transition-colors">
                      {country.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Countries */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                Export Talent In These Countries
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {exportCountries.map((country, index) => (
                  <div key={index} className="bg-green-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {country.flag}
                    </div>
                    <h3 className="font-semibold text-green-900 group-hover:text-green-600 transition-colors">
                      {country.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive talent solutions designed to meet your international workforce needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to international talent management
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Requirement Analysis', description: 'Understanding your specific talent needs and requirements' },
              { step: '02', title: 'Talent Sourcing', description: 'Identifying and screening qualified candidates from our network' },
              { step: '03', title: 'Documentation & Compliance', description: 'Handling all legal requirements and documentation' },
              { step: '04', title: 'Placement & Support', description: 'Successful placement with ongoing support and monitoring' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-blue-700 transition-colors">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect Global Talent?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking to import skilled professionals or export talent to international markets, 
            we're here to make it happen.
          </p>
             onClick={() => openWhatsApp('I want to get started with your talent import/export services. Please guide me through the process.')}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Get Started Today
             onClick={() => openWhatsApp('I would like to schedule a consultation for talent import/export services. When can we discuss?')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalentImportExport;