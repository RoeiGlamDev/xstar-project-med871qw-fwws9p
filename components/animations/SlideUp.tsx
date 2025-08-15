import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      {children}
    </motion.div>
  );
};

const LuxuryFashionTVCosmetics: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
      <h1 className="text-5xl font-bold text-white mb-4">luxury FashionTV cosmetics</h1>
      <SlideUp>
        <h2 className="text-3xl font-semibold text-pink-500 mb-2">Elevate Your Beauty</h2>
        <p className="text-lg text-gray-700">
          Discover our exclusive range of high-end cosmetics that embody elegance and sophistication. 
          At luxury FashionTV cosmetics, we believe in enhancing your natural beauty with products 
          designed for the modern fashionista.
        </p>
        <button className="mt-4 bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300">
          Shop Now
        </button>
      </SlideUp>
    </div>
  );
};

export default LuxuryFashionTVCosmetics;