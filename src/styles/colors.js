const primary = "#FFF";
const text = "#2C2C2C";
const gray = "#B3B3B3";
const secondary = "#000";
const success = "#107F47";
const error = "#D91734";
const green = " #00FF00";
const subTxt = "#A7A7A7;";
const background = "#181818";
const hoverBackground = "#282828";

const colors = {
  transparent: "rgba(0,0,0,0)",
  text,
  subTxt,
  gray,
  primary,
  secondary,
  success,
  error,
  green,
  background,
  hoverBackground,
  theme: {
    lightMode: {
      primary,
      secondary,
    },
    darkMode: {
      primary: secondary,
      secondary: primary,
    },
  },
};
module.exports = colors;
