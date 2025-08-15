import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Classic Glam',
    price: '$99',
    features: [
      'Personalized Makeup Consultation',
      'Luxury Product Samples',
      'Exclusive FashionTV Cosmetics Gift',
    ],
  },
  {
    title: 'Deluxe Radiance',
    price: '$199',
    features: [
      'Full Makeup Application',
      'Skin Care Analysis',
      'FashionTV Cosmetics Gift Set',
      'One-on-One Stylist Session',
    ],
  },
  {
    title: 'Ultimate Elegance',
    price: '$299',
    features: [
      'Complete Glam Package',
      'Trend Analysis & Personalized Lookbook',
      'VIP Access to Fashion Events',
      'Luxury Brand Collaboration Opportunity',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-pink-500 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing for luxury FashionTV cosmetics
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover our exclusive pricing tiers designed for the fashion-forward.
        </p>
        <div className="flex justify-center space-x-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-pink-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-pink-600 mb-2">{tier.title}</h3>
              <p className="text-xl text-pink-500 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">{feature}</li>
                ))}
              </ul>
              <button className="bg-pink-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-pink-600">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;