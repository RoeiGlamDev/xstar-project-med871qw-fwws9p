import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  brandName: string;
}

const Header: React.FC<HeaderProps> = ({ brandName }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-pink-500">
          {brandName}
        </h1>
        <nav className="hidden md:flex space-x-8">
          <motion.div
            href="#collections"
            className="text-gray-800 hover:text-pink-500 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Collections
          </motion.a>
          <motion.div
            href="#about"
            className="text-gray-800 hover:text-pink-500 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="text-gray-800 hover:text-pink-500 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
          <motion.div
            href="#shop"
            className="text-gray-800 hover:text-pink-500 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Shop Now
          </motion.a>
        </nav>
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={handleMenuToggle}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white p-4">
          <motion.div
            href="#collections"
            className="block text-gray-800 hover:text-pink-500 transition-colors"
            whileHover={{ scale: 1.05}}
          >
            Collections
          </motion.a>
          <motion.div
            href="#about"
            className="block text-gray-800 hover:text-pink-500 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="block text-gray-800 hover:text-pink-500 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
          <motion.div
            href="#shop"
            className="block text-gray-800 hover:text-pink-500 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Shop Now
          </motion.a>
        </nav>
      )}
    </header>
  );
};

export default Header;