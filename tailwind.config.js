module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],

      colors: {
        primary: '#f472b6',
        secondary: '#db2777',
        peach: '#fee9df',
        purple: '#5f3b5c',
        pink: '#e63946',
        gray: {
          600: '#4a4a4a',
        },
        warning: '#FFCC00',
        logo1 :"#ee7405",
        logo2 :"#ffc62d",
        logo3 :"#065750",
        logo4 :"#8d153b",
      },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"], // Use only the light theme
  },
};
