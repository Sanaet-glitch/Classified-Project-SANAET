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
        // New 3D theme colors
        theme: {
          // Dark backgrounds
          dark: '#0e1217',
          darker: '#090c10',
          // Primary accent colors
          cyan: '#18FFFF',
          teal: '#00E5E5',
          purple: '#9C6BFF',
          coral: '#FF7676',
          // Additional UI colors
          card: 'rgba(30, 36, 49, 0.75)',
          'card-highlight': 'rgba(42, 48, 66, 0.75)',
        },
        // Keep legacy neon colors for backward compatibility
        neon: {
          blue: 'rgba(56,182,255,0.7)',
          pink: 'rgba(255,56,225,0.7)',
          green: 'rgba(57,255,20,0.7)',
          yellow: 'rgba(255,243,56,0.7)',
        },
      },
      boxShadow: {
        // Enhanced 3D shadows
        '3d': '0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 2px 8px -3px rgba(0, 0, 0, 0.5)',
        '3d-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.4), 0 2px 12px -3px rgba(0, 0, 0, 0.6)',
        'card-glow': '0 0 15px 2px rgba(24, 255, 255, 0.15)',
        'card-glow-purple': '0 0 15px 2px rgba(156, 107, 255, 0.15)',
        'card-glow-coral': '0 0 15px 2px rgba(255, 118, 118, 0.15)',
        // Keep legacy neon shadows for backward compatibility
        'neon-blue': '0 0 8px 2px rgba(56,182,255,0.4)',
        'neon-pink': '0 0 8px 2px rgba(255,56,225,0.4)',
        'neon-green': '0 0 8px 2px rgba(57,255,20,0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to bottom right, #0e1217, #090c10)',
        'gradient-card': 'linear-gradient(to bottom right, rgba(30, 36, 49, 0.9), rgba(20, 24, 34, 0.9))',
        'gradient-cyan': 'linear-gradient(to right, #18FFFF, #00E5E5)',
        'gradient-purple': 'linear-gradient(to right, #9C6BFF, #8452FF)',
        'gradient-coral': 'linear-gradient(to right, #FF7676, #FF5252)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
