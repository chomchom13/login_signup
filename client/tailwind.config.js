/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "grey-slate": {
        1: "#E0CCBE",
        2: "#747264",
        3: "#3C3633"
      },
    },
    extend: {},
  },
  plugins: [],
};
