import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep blue palette
        'mil-green': {
          50:  '#eef5fb',
          100: '#d7e8f5',
          200: '#afd0e8',
          300: '#80afd4',
          400: '#518abd',
          500: '#1f4e79',
          600: '#1b456c',
          700: '#173b5d',
          800: '#102b44',
          900: '#0a1c2e',
          950: '#06111d',
        },
        // Brick red accent palette
        gold: {
          300: '#e58b78',
          400: '#d9634f',
          500: '#c44a3a',
          600: '#a93c30',
          700: '#843025',
        },
        // Charcoal backgrounds
        'mil-black': {
          DEFAULT: '#11151b',
          800: '#20242a',
          700: '#272d35',
          600: '#303740',
        },
      },
      fontFamily: {
        heading: ['var(--font-oswald)', 'sans-serif'],
        body: ['var(--font-opensans)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
