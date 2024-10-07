/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Lines: "#1F3042",
      },
      width: {
        icons: '30px',
        Headernav: '550px'
      },
      height: {
        icons: '30px'
      }
    },
    fontSize: {
      Headline: '62px',
      Subheadline: '32px',
      Bodytext: '18px',
      Lables: '16px',
      Codesnippets: '14px'
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.custom-underline': {
          position: 'relative',
          textDecoration: 'none',

          '&::after': {
            content: '""',
            position: 'absolute',
            left: '0',
            bottom: '-2px',
            width: '0',
            height: '3px',
            backgroundColor: '#FEA55F',
            transition: 'width 0.3s ease', 
          },

          '&:hover::after': {
            width: '100%', 
          },
        },
      });
    },
  ],
};
