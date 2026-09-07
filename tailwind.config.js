/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scrapbook: {
          bg: '#faf7f2',
          card: '#ffffff',
          paper: '#fffdfa',
          pink: '#fce7f3',
          pinkDark: '#f472b6',
          rose: '#ffe4e6',
          yellow: '#fef3c7',
          mint: '#dcfce7',
          blue: '#e0f2fe',
          lavender: '#f3e8ff',
          peach: '#ffedd5',
          ink: '#332f2e',
          inkLight: '#57534e',
          tape: 'rgba(253, 224, 71, 0.4)',
        }
      },
      fontFamily: {
        sans: ['"Poppins"', '"Noto Sans Devanagari"', '"Quicksand"', '"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', '"Patrick Hand"', '"Noto Sans Devanagari"', 'cursive'],
        display: ['"Space Grotesk"', '"Poppins"', '"Outfit"', 'sans-serif'],
        journal: ['"Patrick Hand"', '"Caveat"', '"Noto Sans Devanagari"', 'cursive'],
      },
      animation: {
        'scan': 'scanLine 3s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'laser': 'laserMove 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        scanLine: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
