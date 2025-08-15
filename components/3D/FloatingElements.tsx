import { useEffect, useRef } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const FloatingElements: React.FC = () => {
  const floatingRef = useRef(null);

  useEffect(() => {
    // Animation logic can be added here for floating effect
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        className="text-5xl font-bold text-pink-500 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to luxury FashionTV cosmetics
      </motion.h1>
      <motion.div
        className="text-xl text-gray-700 mb-10 text-center mx-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Experience the elegance and sophistication of our premium cosmetic line, designed for the modern fashionista.
      </motion.p>
      <div className="w-full max-w-4xl h-96">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={1} />
          {/ 3D Model Placeholder /}
          <mesh ref={floatingRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="pink" />
          </mesh>
        </Canvas>
      </div>
      <motion.div
        className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

export default FloatingElements;