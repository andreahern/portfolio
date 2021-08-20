module.exports = {
  important: true,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        regular: ["Nunito Regular", "sans-serif"],
        semibold: ["Nunito Semibold", "sans-serif"],
        light: ["Nunito Light", "sans-serif"],
        bold: ["Nunito Bold", "sans-serif"],
      },
      colors: {
        body: "#324B4C",
        bodyHover: "#466769",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
    },
  },
  plugins: [],
};
