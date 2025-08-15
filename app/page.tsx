import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-pink-500 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center h-screen text-center">
        <motion.div
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to luxury FashionTV cosmetics
        </motion.h1>
        <motion.div
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Elevate your beauty with our exclusive collections
        </motion.p>
        <motion.div
          className="bg-white text-pink-500 px-6 py-3 rounded-full shadow-lg transform transition-transform hover:scale-105"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-white text-pink-500 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose luxury FashionTV cosmetics?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="p-6 border border-pink-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>
            <p>Our products are crafted with the finest ingredients for a luxurious feel.</p>
          </motion.div>
          <motion.div
            className="p-6 border border-pink-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Exclusive Collections</h3>
            <p>Discover limited edition products designed for the modern beauty enthusiast.</p>
          </motion.div>
          <motion.div
            className="p-6 border border-pink-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Personalized Experience</h3>
            <p>Enjoy a tailored shopping experience with our beauty consultants.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Homepage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default Homepage;