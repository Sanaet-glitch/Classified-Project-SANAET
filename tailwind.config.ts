module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        neon: {
          blue: 'rgba(56,182,255,0.7)',
          pink: 'rgba(255,56,225,0.7)',
          green: 'rgba(57,255,20,0.7)',
          yellow: 'rgba(255,243,56,0.7)',
        },
      },
      boxShadow: {
        'neon-blue': '0 0 8px 2px rgba(56,182,255,0.4)',
        'neon-pink': '0 0 8px 2px rgba(255,56,225,0.4)',
        'neon-green': '0 0 8px 2px rgba(57,255,20,0.4)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
