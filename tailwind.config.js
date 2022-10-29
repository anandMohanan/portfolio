module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        Source: ["Source Code Pro", "monospace"],
      },
      colors: {
        prim: "#B9FFBD",
      },
    },
  },
  plugins: [],
};
