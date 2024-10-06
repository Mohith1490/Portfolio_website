/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        Lines: "#1F3042",
      },
      width:{
        icons: '30px'
      },
      height:{
        icons: '30px'
      }
    },
    fontSize:{
      Headline: '62px',
      Subheadline: '32px',
      Bodytext: '18px',
      Lables: '16px',
      Codesnippets: '14px'
    }
  },
  plugins: [],
};
