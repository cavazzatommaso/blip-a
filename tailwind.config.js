module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        'heroDiv': '125vh',
        'heroDiv2xl': '100vh'
      },
      backgroundPosition:{
        'top-25': 'center -10vh',
        'positionSm': 'center 30vh',
      },
      backgroundImage: {
        'bgGradient': "url('/assets/bgWithRow.webp')",
      },
      fontFamily:{
        'mattone':"Mattone",
        'subtitle':"IBM Plex Sans"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
