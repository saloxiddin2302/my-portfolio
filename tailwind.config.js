module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Raleway',
      secondary: 'Quicksand',
      tertiary: 'Agdasima',
      tortinchi: 'Press Start 2P',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: 'rbga(255, 255, 255, 0.5)',
        accent: 'rbga(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        site: "url('./assets/bg2.jpg')",
        about: "url('./assets/imgAbout.jpg')",
        services: "url('./assets/laptop1.jpg')",
      },
    },
  },
  plugins: [],
};