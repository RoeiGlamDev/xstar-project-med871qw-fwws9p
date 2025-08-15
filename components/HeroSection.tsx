import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-500 to-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-bold text-pink-600 mb-4">
          luxury FashionTV cosmetics
        </h1>
        <p className="text-2xl text-gray-800 mb-8">
          Elevate your beauty with our exclusive range of luxury cosmetics tailored for the modern fashionista.
        </p>
        <motion.div
          className="bg-pink-600 text-white py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
        <motion.div
          className="bg-white text-pink-600 py-3 px-6 rounded-lg border-2 border-pink-600 shadow-lg mt-4 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Collection
        </motion.button>
      </motion.div>
      <div className="absolute bottom-10 text-center">
        <p className="text-sm text-gray-500">
          Trusted by top fashion influencers and celebrities worldwide.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;