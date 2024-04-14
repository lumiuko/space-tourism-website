/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0B0D17',
        'light-blue': '#D0D6F9',
        line: '#383B4B'
      },
      fontSize: {
        h1: '9.375rem', // 150px
        h2: '6.25rem', // 100px
        h3: '3.5rem', // 56px
        h4: '2rem', // 32px
        h5: '1.75rem', // 28px
        sh1: '1.75rem', // 28px
        sh2: '0.875rem', // 14px
        nav: '1rem', // 16px
        'body-sm': '0.9375rem', // 15px
        'body-md': '1rem', // 16px
        'body-lg': '1.125rem' // 18px
      },
      lineHeight: {
        h1: '10.75rem', // 172px
        h2: '7.1875rem', // 115px
        h3: '4rem', // 64px
        h4: '2.3125rem', // 37px
        h5: '2.125rem', // 34px
        sh1: '2rem', // 32px
        sh2: '1.0625rem', // 17px
        nav: '1.1875rem', // 19px
        'body-sm': '1.5625rem', // 25px
        'body-md': '1.75rem', // 28px
        'body-lg': '2rem' // 32px
      },
      letterSpacing: {
        h5: '4.75px',
        sh2: '2.35px',
        nav: '2.7px'
      },
      maxWidth: {
        container: '1110px'
      },
      gridTemplateColumns: {
        destination: 'repeat(2, 445px)'
      }
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      serif: ['Bellefair', 'serif'],
      condensed: ['Barlow Condensed', 'sans-serif']
    },
    backdropBlur: {
      nav: '40px'
    },
    boxShadow: {
      button: '0 0 0 88px rgb(255 255 255 / 10%)'
    }
  },
  plugins: []
}
