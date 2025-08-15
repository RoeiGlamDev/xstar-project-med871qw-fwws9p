import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  subtitle?: string;
  placeholderEmail?: string;
  buttonText?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = "Join the luxury FashionTV cosmetics Family",
  subtitle = "Stay updated with our latest collections, exclusive offers, and beauty tips.",
  placeholderEmail = "Enter your email address",
  buttonText = "Subscribe",
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic
    console.log("Email submitted: ", email);
    setEmail('');
  };

  return (
    <section className="bg-white p-8 md:p-12 lg:p-16">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-500">{title}</h2>
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
      </motion.div>
      <motion.div
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholderEmail}
          required
          className="p-3 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out mb-4 md:mb-0 md:mr-4"
        />
        <motion.div
          type="submit"
          className="bg-pink-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-600 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
        >
          {buttonText}
        </motion.button>
      </motion.form>
    </section>
  );
};

export default NewsletterSection;