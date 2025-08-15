import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;