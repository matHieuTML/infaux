/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './index.html',          // Inclut le fichier HTML principal
    './src/**/*.{js,ts}',    // Inclut tous les fichiers JS/TS dans le répertoire src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001258',   // Couleur principale
        secondary: '#302CA5', // Couleur secondaire
        accent: '#ffee36', 
        crystal: '#2B2CEB'
      },
    },
  },
  plugins: [
    
  ],
};