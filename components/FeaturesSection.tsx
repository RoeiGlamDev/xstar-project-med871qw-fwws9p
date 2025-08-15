import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Exclusive Formulations',
    description: 'Indulge in our meticulously crafted formulations that elevate your beauty routine to new heights.',
    icon: <i className="fas fa-gem text-pink-500"></i>,
  },
  {
    id: 2,
    title: 'Sustainable Luxury',
    description: 'Experience luxury without compromise. Our products are ethically sourced and eco-friendly.',
    icon: <i className="fas fa-leaf text-pink-500"></i>,
  },
  {
    id: 3,
    title: 'Bespoke Beauty Solutions',
    description: 'Discover personalized beauty solutions tailored to enhance your unique style and elegance.',
    icon: <i className="fas fa-paint-brush text-pink-500"></i>,
  },
  {
    id: 4,
    title: 'Timeless Elegance',
    description: 'Our collections embody timeless elegance, ensuring you always stand out in any occasion.',
    icon: <i className="fas fa-crown text-pink-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <motion.div 
          className="text-4xl font-bold text-pink-500 mb-8" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Discover the Luxury of <span className="text-pink-600">FashionTV Cosmetics</span>
        </motion.h2>
        <motion.div 
          className="text-lg text-gray-700 mb-12" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience a new dimension of beauty with our exclusive range of products designed for the modern connoisseur.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => (
            <motion.div 
              key={feature.id} 
              className="bg-pink-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-pink-600">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;