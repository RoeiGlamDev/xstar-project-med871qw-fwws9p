import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Carter',
    review: 'luxury FashionTV cosmetics transformed my look for the gala. The high-quality products and personalized service made me feel like a star!',
    rating: 5,
    photo: '/images/testimonials/sophia.jpg',
  },
  {
    name: 'Isabella Martinez',
    review: 'I have never felt so glamorous! The luxury FashionTV cosmetics collection is simply divine and the customer service was impeccable.',
    rating: 5,
    photo: '/images/testimonials/isabella.jpg',
  },
  {
    name: 'Olivia Johnson',
    review: 'The premium feel of luxury FashionTV cosmetics left me in awe. My skin has never looked so radiant and flawless!',
    rating: 5,
    photo: '/images/testimonials/olivia.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div 
          className="text-4xl font-bold text-pink-500 mb-8" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="max-w-xs mx-4 my-4 p-6 bg-pink-50 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img 
                src={testimonial.photo} 
                alt={testimonial.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-pink-600 mb-2">{testimonial.name}</h3>
              <p className="text-gray-700 mb-4">{testimonial.review}</p>
              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;