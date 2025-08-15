import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
  tap: { scale: 0.95 },
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, disabled }) => {
  const baseClasses = 'px-6 py-3 rounded-lg focus:outline-none transition-all duration-300';
  const primaryClasses = 'bg-pink-500 text-white hover:bg-pink-600';
  const secondaryClasses = 'bg-white text-pink-500 border border-pink-500 hover:bg-pink-100';

  const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;
  
  return (
    <motion.div
      className={`${baseClasses`} ${variantClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}}
      onClick={onClick}
      disabled={disabled}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      aria-label={typeof children === 'string' ? children : 'Button'}
    >
      {children}
    </motion.button>
  );
};

export default Button;