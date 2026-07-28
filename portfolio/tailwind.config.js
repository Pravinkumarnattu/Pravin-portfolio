/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#05070A',
          soft: '#0A0E12',
        },
        surface: {
          DEFAULT: '#0D1117',
          light: '#12171F',
        },
        emerald: {
          glow: '#10B981',
          deep: '#059669',
          soft: '#34D399',
        },
        azure: {
          DEFAULT: '#3B82F6',
          deep: '#6366F1',
        },
        ink: {
          DEFAULT: '#F5F7FA',
          muted: '#94A3B8',
          faint: '#5B6472',
        },
        paper: {
          DEFAULT: '#F8FAF9',
          surface: '#FFFFFF',
          ink: '#0B1120',
          muted: '#5B6472',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'emerald-azure': 'linear-gradient(135deg, #10B981 0%, #3B82F6 55%, #6366F1 100%)',
        'grid-lines':
          'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(16,185,129,0.35)',
        'glow-blue': '0 0 40px -8px rgba(59,130,246,0.35)',
        glass: '0 8px 32px 0 rgba(0,0,0,0.37)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        blink: 'blink 1s step-end infinite',
        aurora: 'aurora 18s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.96)' },
        },
      },
    },
  },
  plugins: [],
};
