import colors from "vuetify/es5/util/colors";

export default {
  treeShake: true,
  customVariables: ["~/assets/variables.scss"],
  theme: {
    dark: true,
    themes: {
      dark: {
        background: "#1c1c1c",
        cards: "#212121",
        primary: "#9e9e9e",
        accent: "#1C466F",
        secondary: "#8C8C8C",
        info: "#26a69a",
        warning: "#ffc107",
        error: "#dd2c00",
        success: "#00e676",
      },
    },
  },
};
