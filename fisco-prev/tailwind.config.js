/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {

      colors: {
        azulPrimario: '#00007e',
        azulSecundario: '#072c94',
        azulTerciario: '#074c8a',
        branco: '#fff',
        brancoBorda: 'rgba(250,250,250,0.3)',
        cinzaBg: '#f7f7f7',
        cinzaSubTitle: '#666',
        cinzaEscuro: '#1e1e1e',
        cardServicosBg: '#f7f7f7',
        cinzaFooter: '#232323',
        navBg: '#074c8a',
      },  

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

      backgroundImage: {
        bannerTopo: 'url("../public/banner-topo.jpg")',
        banner1: 'url("../public/banner1.jpg")',
        parallaxe: 'url("../public/banner2.jpg")',
      },
    },
  },
  plugins: [],
};
