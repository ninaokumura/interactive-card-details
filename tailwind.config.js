/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "linear-gradient": "hsl(249, 99%, 64%) to hsl(278, 94%, 30%)",
        red: "hsl(0, 100%, 66%)",
        white: "hsl(0, 0%, 100%)",
        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
      },
      fontFamily: {
        "sans-serif": ["Space Grotesk", "sans-serif"],
      },
    },
    backgroundImage: {
      main: "url('/src/assets/images/bg-main-desktop.png')",
      mobile: "url('/src/assets/images/bg-main-mobile.png')",
    },
  },
  plugins: [],
};
