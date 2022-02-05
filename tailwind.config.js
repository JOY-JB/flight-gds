module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          bg: "#404E67",
          text: "#FFFFFF",
          // dropdown: "#FFFFFF",
          hover: {
            bg: "#7653F6",
            text: "#7653F6",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
