import React from 'react';

const Countries = () => {
  const openWhatsApp = (country: string) => {
    const phoneNumber = '+923187203522';
    const message = `Hello! I'm interested in visa services for ${country}. Can you help me with the requirements and process?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const countries = [
    {
      name: 'Canada',
      flag: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Express Entry, Provincial Nominee Program, Study Permits',
      popular: true
    },
    {
      name: 'Australia',
      flag: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Skilled Migration, Student Visa, Working Holiday',
      popular: true
    },
    {
      name: 'United Kingdom',
      flag: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Tier 2 Work Visa, Student Visa, Spouse Visa',
      popular: true
    },
    {
      name: 'United States',
      flag: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'H1B, F1 Student, Tourist Visa, Green Card',
      popular: true
    },
    {
      name: 'New Zealand',
      flag: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Skilled Migrant, Work Visa, Student Visa'
    },
    {
      name: 'Germany',
      flag: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'EU Blue Card, Student Visa, Job Seeker Visa'
    },
    {
      name: 'Netherlands',
      flag: 'https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Highly Skilled Migrant, Student Visa'
    },
    {
      name: 'Sweden',
      flag: 'https://images.pexels.com/photos/1559821/pexels-photo-1559821.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Work Permit, Student Visa, Family Reunion'
    },
    {
      name: 'Norway',
      flag: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Skilled Worker, Student Visa, Family Immigration'
    },
    {
      name: 'Denmark',
      flag: 'https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Green Card, Work Permit, Student Visa'
    },
    {
      name: 'Singapore',
      flag: 'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Employment Pass, Student Pass, Dependent Pass'
    },
    {
      name: 'UAE',
      flag: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      description: 'Work Visa, Tourist Visa, Golden Visa'
    }
  ];

  return (
    <section id="countries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Countries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide visa and immigration services for 25+ countries worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div key={index} className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer group ${country.popular ? 'ring-2 ring-red-600' : ''}`}>
              {country.popular && (
                <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-full inline-block mb-3">
                  Most Popular
                </div>
              )}
              <div className="mb-4">
                <img 
                  src={country.flag} 
                  alt={`${country.name} flag`}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors">
                {country.name}
              </h3>
              <p className="text-gray-600 text-sm">{country.description}</p>
              <button 
                onClick={() => openWhatsApp(country.name)}
                className="mt-4 text-red-600 font-semibold text-sm hover:text-black transition-colors"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Don't see your destination country? We handle many more!</p>
          <button 
            onClick={() => openWhatsApp('Hello! I need visa services for a country not listed on your website. Can you help me?')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us for Other Countries
          </button>
        </div>
      </div>
    </section>
  );
};

export default Countries;