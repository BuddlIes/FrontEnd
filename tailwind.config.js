/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#749C03",
        home: "#B4D752A8",
        bdblack: "#161718",
        green01: "#9FC700",
        green04: "#5D6247",
        gray03: "#C7CCD0",
        gray05: "#8A8F94",
      },
    },
    screens: {
      sm: "640px",
      //=> @media (min-width: 640px)
      md: "768px",
      //=> @media (min-width: 768px)
      lg: "1024px",
      //=> @media (min-width: 1024px)
      xl: "1280px",
      //=> @media (min-width: 1280px)
      "2xl": "1536px",
      //=> @media (min-width: 1536px)
    },
  },
  plugins: [],
};
