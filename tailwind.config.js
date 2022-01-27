module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xss': '0.6rem',
        '10xl': '12rem'
      },
      colors: {
        'brand': {
          50: '#f8e3ce',
          // 450: '#cfb296',
          450: '#cba67b',
          900: '#221e1b'
        }
      },
      spacing: {
        98: '26rem',
        100: '28rem'
      }
    },
  },
  plugins: [],
}