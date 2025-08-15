import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  links: { label: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ links, socialMedia }) => {
  return (
    <footer className="bg-white text-pink-600 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-2">luxury FashionTV cosmetics</h2>
          <p className="text-lg">
            Elevate your beauty with our luxurious cosmetic line, crafted for the discerning fashionista.
          </p>
        </motion.div>
        <div className="flex justify-center space-x-10 mb-8">
          {links.map((link) => (
            <motion.div
              key={link.label}
              href={link.url}
              className="text-pink-600 hover:text-pink-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        <div className="flex justify-center space-x-6">
          {socialMedia.map((media) => (
            <motion.div
              key={media.platform}
              href={media.url}
              className="text-pink-600 hover:text-pink-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
              aria-label={Follow us on ${media.platform}}
            >
              <i className={`fab fa-${media.platform.toLowerCase()`}}></i>
            </motion.a>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} luxury FashionTV cosmetics. All rights reserved.
          </p>
          <p className="text-sm">
            Designed with elegance to enhance your beauty journey.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;