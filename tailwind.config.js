/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          deepest: '#0A0F1E',
          panel: '#111827',
          elevated: '#162033',
          border: '#1E2D45',
        },
        blue: {
          primary: '#3B82F6',
          hover: '#60A5FA',
          muted: '#8BA3C7',
        },
        yellow: {
          accent: '#FACC15',
        },
        purple: {
          accent: '#7C3AED',
          soft: '#A78BFA',
          glow: 'rgba(124, 58, 237, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
