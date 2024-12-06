/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './index.html',         
    './src/**/*.{js,ts}',   
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001258',   
        secondary: '#302CA5', 
        accent: '#ffee36', 
        crystal: '#2B2CEB'
      },
      screens: {
        pres: '1600px',
      },
    },
  },
  plugins: [],
};
