import { defineConfig } from 'tailwindcss';

/
 * Tailwind CSS Configuration for luxury FashionTV cosmetics
 * This configuration sets up a custom color palette and animations
 * tailored specifically for a high-end fashion cosmetics brand.
 */
export default defineConfig({
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#FFC0CB', // Soft Pink
          light: '#FFB6C1', // Light Pink
          dark: '#FF69B4', // Hot Pink
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
});