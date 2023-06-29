/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        guardian: "url('./food-banner.jpeg')",
      },
    },
  },
  plugins: [],
};
