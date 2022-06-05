module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['Fira Code', 'mono'],
        cursive: ['Handlee', 'cursive'],
        'alt-sans': ['Open Sans', 'sans-serif'],
      },
      borderColor: {
        'search-neutral-1': 'var(--search-neutral-1)',
        'search-neutral-2': 'var(--search-neutral-2)',

        'color-1': 'var(--color-1)',
        'color-1-alternative': 'var(--color-1-alternative)',
        'color-1-inverse': 'var(--color-1-script)',

        'color-2': 'var(--color-2)',
        'color-2-inverse': 'var(--color-2-script)',

        'color-3': 'var(--color-3)',
        'color-3-inverse': 'var(--color-3-script)',
      },
      colors: {
        'welcome-headings': 'var(--welcome-headings)',
        'search-neutral-1': 'var(--search-neutral-1)',
        'search-neutral-2': 'var(--search-neutral-2)',
        'footer-link-1': 'var(--footer-link-1)',
        'footer-link-2': 'var(--footer-link-2)',
        comment: 'var(--comment)',
        shadow: 'var(--shadow)',

        neutral: 'var(--neutral)',

        default: 'var(--default)',
        'default-script': 'var(--default-script)',

        inverse: 'var(--inverse)',
        'inverse-script': 'var(--inverse-script)',

        'color-1': 'var(--color-1)',
        'color-1-alternative': 'var(--color-1-alternative)',
        'color-1-script': 'var(--color-1-script)',

        'color-2': 'var(--color-2)',
        'color-2-script': 'var(--color-2-script)',

        'color-3': 'var(--color-3)',
        'color-3-script': 'var(--color-3-script)',

        'color-neutral': 'var(--color-neutral)',
        'color-neutral3-script': 'var(--color-neutral-script)',

        twitter: '#1DA1F2',
        stackoverflow: '#c9510c',
        github: '#000000',
        linkedin: '#2867B2',
      },
      placeholder: {
        'search-neutral-1': 'var(--search-neutral-1)',
        'search-neutral-2': 'var(--search-neutral-2)',
        neutral: 'var(--neutral)',
        default: 'var(--default)',
        inverse: 'var(--inverse)',
        'color-1': 'var(--color-1)',
        'color-2': 'var(--color-2)',
        'color-3': 'var(--color-3)',
      },
      keyframes: {
        shake: {
          '0%, 100%': {
            transform: 'rotate(-10deg)',
          },
          '50%': {
            transform: 'rotate(10deg)',
          },
        },
        wave: {
          '0%': { transform: 'rotate( 0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate( 0.0deg)' },
          '100%': { transform: 'rotate( 0.0deg)' },
        },
      },
      animation: {
        wiggle: 'shake 1s ease-in-out infinite',
        // https://codepen.io/jakejarvis/pen/pBZWZw
        wave: 'wave 2.5s ease-in-out 3',
        'quick-wave': 'wave 1s ease-in-out 2',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};
