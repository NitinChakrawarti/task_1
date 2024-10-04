/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "default": '20px',
      },
      colors: {
        'primary': "#1B1A19",
        'secondary': "#FFED00",
        'bg_light' : "#F2F1F1",
        'light': "#FAFCFC",
      },
      fontFamily: {
        'primary': ['Montserrat'],
      },
    },
  },
  plugins: [],
}

