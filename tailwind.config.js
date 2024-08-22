module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 360px) { ... }

      'md': '360px',
      // => @media (min-width: 400px) { ... }

      'mdx': '460px',
      // => @media (min-width: 650px) { ... }

      'mdl': '550px',
      // => @media (min-width: 750px) { ... }

      'slg': '750px',
      // => @media (min-width: 900px) { ...

      'lg': '900px',
      // => @media (min-width: 1100px) { ... }

      'xl': '1000px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1100px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        greentxt: 'var(--Green-Green-100, #088133)',
        blacklighttxt: 'var(--Black-Black50, #808080)',
        snowy: '#F4F7FE',
        contactBorder: " #E1E1E1",
        redMain: '#E31E24',
        greenCategory: '#E6F2EB',
        modalBg: 'rgba(0, 0, 0, 0.6)',
        contactBg: '#E94B50'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
