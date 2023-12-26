/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "celular": {"max": "550px"},
      "laptop": {"max": "1150px", "min": "550px"},
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},   
  },
  plugins: [],
}



