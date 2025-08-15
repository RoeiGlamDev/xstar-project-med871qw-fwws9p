import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6"
      >
        <h2 className="text-2xl font-bold text-pink-600 mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          className="mt-4 px-4 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-500 transition duration-300 ease-in-out"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;