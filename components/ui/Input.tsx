import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  validationMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, required = false, validationMessage }) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const isValid = required ? !!value : true;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <label className="block text-lg font-semibold text-pink-600 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={w-full p-4 border-2 rounded-lg ${isTouched && !isValid ? 'border-red-500' : 'border-pink-300'} focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300}
        required={required}
      />
      {isTouched && !isValid && (
        <span className="text-red-500 text-sm mt-1">{validationMessage || 'This field is required.'}</span>
      )}
    </motion.div>
  );
};

export default Input;