/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {

      colors: {
        azulPrimario: '#00007e',
        azulSecundario: '#072c94',
        azulTerciario: '#074c8a',
        branco: '#fff',
        brancoBorda: 'rgba(250,250,250,0.3)',
      },  

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

      backgroundImage: {
        banner: "url('../public/slide_01.jpg')",
      },
    },
  },
  plugins: [],
}
