/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "giants-orange": "#fe5a1d",
        "orange-red": "#ff4500",
        "soft-black": "#232429",
      },
      keyframes: {
        "left-to-right-fill": {
          "0%": { width: "0%" },
          "10%": { width: "10%" },
          "15%": { width: "15%" },
          "20%": { width: "20%" },
          "25%": { width: "25%" },
          "50%": { width: "50%" },
          "100%": { width: "100%" },
        },
        "right-to-left-fill": {
          "0%": { width: "0%" },
          "10%": { width: "10%" },
          "15%": { width: "15%" },
          "20%": { width: "20%" },
          "25%": { width: "25%" },
          "50%": { width: "50%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "left-to-right-fill": "left-to-right-fill 3s ease-in-out",
      },
    },
  },
  plugins: [],
};
