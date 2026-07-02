export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0b1120',
        panel: '#111827',
        accent: '#50b5ff',
        accentSoft: '#8ed6ff',
        textBase: '#e7eefc',
        textMuted: '#94a3b8',
      },
      boxShadow: {
        soft: '0 18px 80px rgba(15, 23, 42, 0.2)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
