/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "var(--first-color)",
        second: "var(--second-color)",
        third: "var(--third-color)",
        fourth: "var(--fourth-color)",
      },
    },
  },
  plugins: [],
};
