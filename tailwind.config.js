/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Bebas Neue", "sans-serif"],
    },
    extend: {
      colors: {
        c_primary: "rgb(var(--color-primary) / <alpha-value>)",
        c_secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        c_bg: "rgb(var(--color-bg) / <alpha-value>)",
        c_white: "rgb(var(--color-white) / <alpha-value>)",
      },
      boxShadow: {
        c_shadow: "var(--shadow)",
      },
      borderRadius: {
        c_br: "var(--borderRadius)",
      },
      spacing: {
        c_gap: "var(--gap)",
        c_bodyPad: "var(--bodyPad)",
      },
      screens: {
        phone: "576px",
        tablet: "768px",
        laptop: "992px",
        pc: "1200px",
      },
    },
  },
  plugins: [],
};
