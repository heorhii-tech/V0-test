/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-gradient': 'linear-gradient(0deg, #FFF7ED, #FFF7ED), linear-gradient(180deg, rgba(255, 237, 213, 0) 0%, rgba(255, 237, 213, 0.4) 100%)',
        'tariff-card': 'linear-gradient(180deg, #FFFFFF 0%, #DBEAFE 100%)',
        'tariff-border': 'linear-gradient(180deg, #DBEAFE 0%, #BFDBFE 100%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.border-gradient-tariff': {
          'position': 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            padding: '1px', // толщина границы
            borderRadius: '16px',
            background: 'linear-gradient(180deg, #DBEAFE 0%, #BFDBFE 100%)',
            '-webkit-mask': 
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            '-webkit-mask-composite': 'xor',
            'mask-composite': 'exclude',
            'pointer-events': 'none',
          }
        },
      })
    },
  ],
}