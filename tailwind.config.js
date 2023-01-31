const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./slices/**/*.js"],
  theme: {
    fontFamily: {
      sans: 'Poppins, ui-sans-serif',
      serif: 'Lora, ui-serif'
    },
    extend: {
      colors: {
        'main-color': colors.pink['400']
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  // purge: {
  //   enabled: true,
  //   content: ["./src/**/*.html", "./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  // }
};

// sans: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
//     serif: 'Lora, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',