/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dinPro: ['D-DIN-PRO', 'sans-serif'],
        dinMedium: ['DIN-PRO-Medium', 'sans-serif'],
        dinBold: ['DINPro-Bold', 'sans-serif'],
        inknut: ['InknutAntiqua-Light', 'sans-serif'],
        nexa: ['NexaLight', 'sans-serif'],
        inknutMedium: ['InknutAntiqua-Medium', 'sans-serif'],
        nunito: ['Nunito-VariableFont', 'sans-serif'],
        DMSans: ['DMSans-VariableFont', 'sans-serif'],
        GothamRounded: ['Flamante-Roma-Medium', 'sans-serif'],
        inter: ['Inter-VariableFont', 'sans-serif'],

      },
      colors: {
        pink: '#FFF7E2',  
        green: '#3A643B',
        lightGreen: '#3A643BA8',
        underline: '#C3D0C4',
        border: '#E4E4E4',
        ash:'#414141',
      },
      screens: {
        xs: '360px', 
        xm: '460px', 
      },
      boxShadow: {
        boxShad: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      },
    },
  },
  plugins: [],
}