/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // UltimateQA Official Brand Colors
        primary: {
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80c0ff',
          300: '#4da7ff',
          400: '#1a8eff',
          500: '#003c96', // Primary Blue
          600: '#003080',
          700: '#002469',
          800: '#001853',
          900: '#000c3c',
        },
        secondary: {
          50: '#f3e6ff',
          100: '#e0b3ff',
          200: '#cd80ff',
          300: '#ba4dff',
          400: '#a71aff',
          500: '#8c3cf9', // Primary Purple
          600: '#7030c7',
          700: '#542495',
          800: '#381863',
          900: '#1c0c31',
        },
        charcoal: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#cfcfcf',
          300: '#bbbbbb',
          400: '#a7a7a7',
          500: '#797979', // Medium Gray
          600: '#5e5e5e',
          700: '#434343',
          800: '#2e2e2e',
          900: '#252525', // Charcoal
        },
        'light-gray': '#d6d6d6',
        'medium-gray': '#797979',
        'ultimateqa-charcoal': '#252525',
        'ultimateqa-blue': '#003c96',
        'ultimateqa-purple': '#8c3cf9',
        success: {
          50: '#f0fff4',
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        }
      },
      fontFamily: {
        'heading': ['Noir Pro', 'Arial Black', 'system-ui', 'sans-serif'],
        'body': ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'sans': ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['clamp(1.8rem, 3vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'subheading': ['clamp(1.2rem, 2vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #003c96 0%, #8c3cf9 100%)',
        'gradient-hero': 'linear-gradient(45deg, #003c96 0%, #8c3cf9 50%, #003c96 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-icon': 'pulse-icon 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'pulse-icon': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.7',
            transform: 'scale(1.05)',
          },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
} 