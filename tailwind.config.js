module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#13C2C2",
        primaryFocus: "#0f9696",
      },

      // Sizes for bottom padding
      spacing: {
        "1/2": "50%",
        "2/3": "66%",
        full: "100%",
      },
    },
  },
  variants: {
    borderColor: ["hover", "focus", "active"],
    textColor: ["hover", "focus", "active"],
  },
  plugins: [],
};
