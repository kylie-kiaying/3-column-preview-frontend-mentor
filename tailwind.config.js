/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: 'hsl(31, 77%, 52%)',
        cyan: 'hsl(184, 100%, 22%)',
        darkCyan: 'hsl(179, 100%, 13%)',
        transparentWhite: 'hsla(0, 0%, 100%, 0.75)',
        veryLightGray: 'hsl(0, 0%, 95%)',
      },
      fontSize: {
        '15px': '15px',
      },
      fontFamily: {
        'body': ['Lexend Deca', 'sans-serif'],
        'header': ['Big Shoulders Display', 'sans-serif'],
      },
      height: {
        'cardHeight': '520px',
      },
      margin: {
        'custom': '3.75rem',
      }
    },
  },
  plugins: [],
}

