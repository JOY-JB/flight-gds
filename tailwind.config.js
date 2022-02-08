module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          header: {
            bg: "#1C4E80",
            text: "#ffffff",

            hover: {
              bg: "#7653F6",
              text: "#7653F6",
            },
          },
          sidebar: {
            bg: "#20283E",
            text: "#ffffff",
            hover: {
              bg: "#5847C2",
              text: "#7653F6",
            },
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
