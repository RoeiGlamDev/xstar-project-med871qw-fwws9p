import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-pink-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-5 m-4"
      whileHover={{ scale: 1.05 }}
      aria-label={Card for ${title}}
    >
      <img 
        src={imageUrl} 
        alt={Image of ${title}} 
        className="rounded-lg mb-4 w-full h-48 object-cover" 
      />
      <h2 className="text-2xl font-semibold text-pink-600 mb-2">{title}</h2>
      <p className="text-gray-700 text-base">{description}</p>
      <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg transition-colors duration-300 hover:bg-pink-700">
        Shop Now
      </button>
    </motion.div>
  );
};

export default Card;