import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Luxe',
    role: 'Founder & Creative Director',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Isabella Couture',
    role: 'Lead Makeup Artist',
    image: '/images/isabella.jpg',
  },
  {
    name: 'Oliver Vogue',
    role: 'Head of Marketing',
    image: '/images/oliver.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-pink-600 p-8">
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">About luxury FashionTV cosmetics</h1>
        <p className="text-lg">
          At luxury FashionTV cosmetics, we believe that beauty is an art form. Founded in the heart of the fashion capital, our brand embodies elegance and sophistication. Our journey began with a vision to create high-quality cosmetics that celebrate individuality and empower self-expression through luxury.
        </p>
      </motion.section>

      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our History</h2>
        <p className="text-lg">
          Established in 2020, luxury FashionTV cosmetics has quickly become a leader in the luxury beauty space. Our commitment to quality and innovation has allowed us to create products that not only enhance beauty but also reflect the latest fashion trends.
        </p>
      </motion.section>

      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <p className="text-lg">
          We hold ourselves to the highest standards of quality, ethics, and sustainability. Our products are cruelty-free and formulated with the finest ingredients, ensuring that every application feels luxurious while being kind to the planet.
        </p>
      </motion.section>

      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-pink-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-md">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;