import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
  description: string;
}

const Scene: React.FC<SceneProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        className="text-5xl font-bold text-pink-500 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        luxury FashionTV cosmetics
      </motion.h1>
      <motion.div
        className="text-lg text-gray-700 mb-8 text-center max-w-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover the elegance of luxury FashionTV cosmetics, a brand that embodies sophistication and style. Our premium line of cosmetics is designed for the discerning individual who appreciates the fine art of beauty.
      </motion.p>
      <Canvas className="w-full h-96">
        <OrbitControls />
        {/ Add your 3D models here /}
      </Canvas>
      <div className="mt-8 flex flex-col items-center">
        <motion.div
          className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default Scene;