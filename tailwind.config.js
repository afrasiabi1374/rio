/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        logoColor: "#ccab69",
        browForDescribe: "#5d4037",
        brownForIcon: "#3b2610",
        grayText: "#545454",
      },
    },
  },
  plugins: [],
};
