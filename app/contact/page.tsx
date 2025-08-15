import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-10">
      <motion.div
        className="text-4xl font-bold text-pink-500 mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury FashionTV cosmetics
      </motion.h1>

      <motion.div
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-pink-500 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-pink-500 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-pink-500 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </motion.form>

      <div className="bg-white shadow-lg rounded-lg p-5 mt-10 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">Our Location</h2>
        <p className="text-gray-700">
          Visit us at our luxurious flagship store located at:
        </p>
        <p className="text-gray-700 font-bold">123 Fashion Ave, Suite 456</p>
        <p className="text-gray-700">New York, NY 10001</p>

        <h2 className="text-2xl font-semibold text-pink-500 mt-6 mb-4">Business Hours</h2>
        <p className="text-gray-700">Monday - Friday: 10 AM - 8 PM</p>
        <p className="text-gray-700">Saturday: 11 AM - 6 PM</p>
        <p className="text-gray-700">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default Contact;