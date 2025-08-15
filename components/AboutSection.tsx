import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Collins',
    position: 'Creative Director',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    position: 'Head of Product Development',
    image: '/images/liam.jpg',
  },
  {
    name: 'Emma Williams',
    position: 'Marketing Specialist',
    image: '/images/emma.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-pink-600 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">About luxury FashionTV cosmetics</h2>
        <p className="text-lg mb-4">
          At luxury FashionTV cosmetics, we believe in the power of beauty to transform and elevate. Founded with a mission to provide high-end, luxurious cosmetics that complement the modern fashionista, we strive to deliver products that are not only exquisite but also embody sophistication and elegance.
        </p>
        <p className="text-lg mb-8">
          Our commitment to quality is unwavering. We source the finest ingredients and employ cutting-edge technology to create cosmetics that enhance natural beauty while maintaining a luxurious experience. Each product is a testament to our dedication to the art of beauty, designed for those who appreciate the finer things in life.
        </p>

        <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
        <p className="text-lg mb-4">
          Our mission is to empower individuals to express themselves through luxury cosmetics while promoting inclusivity and self-love. We aim to redefine beauty standards and inspire confidence in every application, ensuring that everyone feels beautiful, empowered, and chic.
        </p>

        <h3 className="text-3xl font-bold mb-6">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-pink-100 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-md text-gray-600">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className="text-3xl font-bold mt-12 mb-6">Our Values & Achievements</h3>
        <p className="text-lg mb-4">
          At luxury FashionTV cosmetics, we champion sustainability, innovation, and creativity. Our products have been featured in prestigious fashion magazines and loved by influencers worldwide, affirming our place in the luxury cosmetics industry.
        </p>
        <p className="text-lg mb-8">
          Join us on this exquisite journey as we continue to explore the intersection of luxury and beauty, setting new trends and providing our customers with the ultimate cosmetics experience.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;