export const theme = {
  colors: {
    white: "#fff",
    black: "#000",
    lightBlack: "#303030",
    lightestGray: "rgba(109, 109, 109, 0.811)",
    gray: "rgba(109, 109, 109, 0.394)",
    lightGray: "#3030305e",
    azure: "rgba(125, 255, 245, 0.81)",
    random: `#${Math.floor(Math.random()*16777215).toString(16)}`,
  },
  utils: {
    cubicB: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    shadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  spacing: (el) => 4 * el,
};