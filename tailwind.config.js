/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "rgba(34, 155, 224, 1)",
          black: "rgba(16, 24, 64, 1)",
          purple: "rgba(120, 51, 234, 1)",
          text: {
            body: "rgba(71, 77, 102, 1)",
          },
        },
      },
      fontFamily: {
        satoshi: "Satoshi",
        nunito: "Nunito",
      },
    },
  },
  plugins: [],
};
