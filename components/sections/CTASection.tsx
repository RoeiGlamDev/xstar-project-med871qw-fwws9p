import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white p-10">
      <motion.div
        className="text-4xl font-bold text-pink-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-lg text-gray-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.div
        href={buttonLink}
        className="bg-pink-600 text-white py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTASection;