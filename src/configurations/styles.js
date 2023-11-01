import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  heading: {
    width: "100%",
    alignItems: "flex-start",
    textAlign: "center",
    primary: {
      fontSize: 25,
      fontWeight: "700",
      textTransform: "capitalize",
    },
    secondary: {
      color: colors.grey_dark_3,
      fontSize: 16,
      fontWeight: "400",
      marginTop: 10,
    },
  },
  form: {
    marginTop: 25,
    width: "100%",
  },
};
