/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the app folder
    "./components/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the components folder]
  ],
  theme: {
    extend: {
      fontFamily: {
        rmono: ["SFProDisplay-Regular"],
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
