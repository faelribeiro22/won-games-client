/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F231A5',
        secondary: '#3CD3C1',
        'main-bg': '#06092B',
        'light-bg': '#F2F2F2',
        white: '#FAFAFA',
        black: '#030517',
        'light-gray': '#EAEAEA',
        gray: '#8F8F8F',
        'dark-gray': '#2E2F42',
        red: '#FF6347'
      },
      fontFamily: {
        sans: [
          'Poppins',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif'
        ]
      },
      fontSize: {
        xsmall: '1.2rem',
        small: '1.4rem',
        medium: '1.6rem',
        large: '1.8rem',
        xlarge: '2.0rem',
        xxlarge: '2.8rem',
        huge: '5.2rem'
      },
      spacing: {
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem'
      },
      borderRadius: {
        DEFAULT: '0.4rem'
      },
      maxWidth: {
        container: '130rem'
      },
      gridTemplateColumns: {
        main: 'repeat(auto-fill, minmax(25rem, 1fr))'
      },
      zIndex: {
        base: '10',
        menu: '20',
        overlay: '30',
        modal: '40',
        'always-on-top': '50'
      },
      transitionDuration: {
        default: '300ms',
        fast: '100ms'
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out'
      },
      keyframes: {
        placeholderShimmer: {
          '0%': { backgroundPosition: '-40rem 0' },
          '100%': { backgroundPosition: '40rem 0' }
        },
        hoverAnimation: {
          from: {
            width: '0',
            left: '50%'
          },
          to: {
            width: '100%',
            left: '0'
          }
        }
      },
      animation: {
        'placeholder-shimmer': 'placeholderShimmer 1.5s infinite linear',
        'hover-animation': 'hoverAnimation 0.2s forwards'
      }
    }
  },
  plugins: []
}
