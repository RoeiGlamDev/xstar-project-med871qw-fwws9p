import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.reason) newErrors.reason = 'Please select a reason';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className="py-12 bg-white text-pink-600">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact luxury FashionTV cosmetics</h2>
        <p className="text-center mb-8">For inquiries regarding our luxury cosmetics, please fill out the form below.</p>
        
        <form onSubmit={handleSubmit} className="bg-pink-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={w-full p-3 border rounded ${errors.name ? 'border-red-500' : 'border-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-500}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={w-full p-3 border rounded ${errors.email ? 'border-red-500' : 'border-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-500}
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="reason">Reason for Contact</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className={w-full p-3 border rounded ${errors.reason ? 'border-red-500' : 'border-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-500}
            >
              <option value="">Select a reason</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Feedback">Feedback</option>
            </select>
            {errors.reason && <p className="text-red-500 text-xs">{errors.reason}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={w-full p-3 border rounded ${errors.message ? 'border-red-500' : 'border-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-500}
              rows={4}
              placeholder="Your Message"
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-bold">Business Information</h3>
          <p className="text-sm">luxury FashionTV cosmetics</p>
          <p className="text-sm">123 Fashion Ave, New York, NY 10001</p>
          <p className="text-sm">Business Hours: Mon - Fri, 9 AM - 5 PM</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;