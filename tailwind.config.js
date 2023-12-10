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
        primary: "#272727", // Dark gray
        "primary-focus": "#ebc9a9",

        secondary: "#f6f3ef", // Light cream
        "secondary-focus": "#ebc9a9",

        tertiary: "#9eb4cd", // Soft blue
        "tertiary-focus": "#ebc9a9",

        quaternary: "#ebc9a9", // Pale orange
        "quaternary-focus": "#9eb4cd",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customlight: {
          primary: "#272727",
          "primary-content": "#f6f3ef",

          secondary: "#f6f3ef",
          "secondary-content": "#272727",

          tertiary: "#9eb4cd",
          "tertiary-content": "#272727",

          quaternary: "#ebc9a9",
          "quaternary-content": "#272727",

          "base-content": "#272727",
          "base-100": "#f6f3ef",
          "base-200": "#f6f3ef",
          "base-300": "#f6f3ef",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
};
