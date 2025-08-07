import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      country: 'Canada',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Haideri Consultants made my Canadian immigration dream come true. Their professional guidance and support throughout the process was exceptional. Highly recommended!'
    },
    {
      name: 'Fatima Ali',
      country: 'Australia',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Thanks to their expert advice, I successfully obtained my Australian student visa. The team was always available to answer my questions and guide me through each step.'
    },
    {
      name: 'Muhammad Khan',
      country: 'United Kingdom',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Professional, reliable, and results-oriented. Haideri Consultants helped me secure my UK work visa efficiently. Their attention to detail is remarkable.'
    },
    {
      name: 'Sarah Ahmed',
      country: 'Germany',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'I was impressed by their knowledge of German immigration laws. They handled my case with utmost professionalism and I got my visa approved on the first attempt.'
    },
    {
      name: 'Ali Raza',
      country: 'New Zealand',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Excellent service from start to finish. The team at Haideri Consultants is knowledgeable, patient, and truly cares about their clients success.'
    },
    {
      name: 'Ayesha Malik',
      country: 'United States',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Getting my US visa seemed impossible until I found Haideri Consultants. Their expertise and dedication made all the difference. Forever grateful!'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients who achieved their immigration goals with our help
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-red-600 opacity-20" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-red-600 font-medium">Migrated to {testimonial.country}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;