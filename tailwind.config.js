/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#0B0E14',
        panel: '#151A23',
        line: '#2A3241',
        dim: '#94A3B8',
        'lego-red': '#D01012',
        'lego-yellow': '#FFCF00',
        'lego-blue': '#0055BF',
        'lego-green': '#00852B',
        'lego-cyan': '#00A3A3',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { opacity: 0, transform: 'scale(0.8) rotate(-10deg)' },
          '60%': { opacity: 1, transform: 'scale(1.05) rotate(2deg)' },
          '100%': { opacity: 1, transform: 'scale(1) rotate(0)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1.5s step-end infinite',
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        bounceIn: 'bounceIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
