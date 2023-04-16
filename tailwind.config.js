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
          page: { bg: "rgba(249, 250, 252, 1)" },
          primary: "rgba(34, 155, 224, 1)",
          black: "rgba(16, 24, 64, 1)",
          purple: "rgba(120, 51, 234, 1)",
          red: "rgba(241, 88, 50, 1)",
          green: "rgba(66, 151, 119, 1)",
          text: {
            body: "rgba(71, 77, 102, 1)",
          },
          table: {
            text: "rgba(105, 111, 140, 1)",
            opened: "rgba(216, 218, 229, 1)",
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
