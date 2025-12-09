
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf4f5',
          100: '#fbe8eb',
          200: '#f6d5d9',
          300: '#eeb3bb',
          400: '#e38696',
          500: '#d35d74',
          600: '#be3d5a',
          700: '#9f2e48',
          800: '#862941',
          900: '#72263d',
        },
        blush: {
          50: '#fef7f6',
          100: '#fdeeed',
          200: '#fcddd9',
          300: '#f9c0ba',
          400: '#f49a91',
          500: '#eb6f64',
          600: '#d84e42',
          700: '#b63d32',
          800: '#96362e',
          900: '#7c322c',
        },
        gold: {
          50: '#fefbec',
          100: '#fdf4ca',
          200: '#fbe890',
          300: '#f9d856',
          400: '#f7c62e',
          500: '#f1a513',
          600: '#d57d0d',
          700: '#b1580e',
          800: '#904412',
          900: '#763812',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'rise': 'rise 8s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 20px rgba(241, 165, 19, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(241, 165, 19, 0.6)' },
        },
        rise: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '0.3' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-100vh) scale(1)', opacity: '0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
