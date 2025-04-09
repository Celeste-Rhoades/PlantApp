/** @type {import('tailwindcss').Config} */
export default {
  content: ["./inex.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display"],
        lato: ["Lato"],
      },
    },
  },
  plugins: [],
};
