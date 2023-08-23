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
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "primary-opacity-50": "var(--primary-opacity-50)",
        "primary-opacity-40": "var(--primary-opacity-40)",
        "primary-opacity-30": "var(--primary-opacity-30)",
        "primary-opacity-20": "var(--primary-opacity-20)",
      },
    },
  },
  plugins: [],
};
