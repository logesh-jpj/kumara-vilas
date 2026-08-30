/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#030f0b',
          dark: '#061a14',
          surface: '#0a251d',
          card: '#0e2f25',
          cardHover: '#133a2f',
          border: '#1a473a',
          gold: {
            light: '#f3d999',
            DEFAULT: '#d4af37',
            muted: '#c5a059',
            dark: '#9e7d3b',
            antique: '#8b6914'
          },
          cream: {
            light: '#ffffff',
            DEFAULT: '#fbf8f2',
            muted: '#e8decb',
            dark: '#cfbe9e'
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Playfair Display', 'serif']
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 45px -5px rgba(212, 175, 55, 0.35)',
        'dark-inner': 'inset 0 2px 8px 0 rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f5d78e 0%, #d4af37 50%, #9e7d3b 100%)',
        'gold-gradient-soft': 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(197,160,89,0.05) 100%)',
        'radial-vignette': 'radial-gradient(circle at center, rgba(6,26,20,0.4) 0%, rgba(3,15,11,0.95) 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(3,15,11,0.75) 0%, rgba(6,26,20,0.88) 60%, rgba(6,26,20,1) 100%)'
      }
    },
  },
  plugins: [],
}
