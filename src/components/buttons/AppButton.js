import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { AppText } from "../common";
import colors from "../../configurations/colors";

/**
 * @breif Render application button
 * @param {String} title Button title
 * @param {String} color Button color
 * @param {Function} onPress Even handler when button is press
 * @param {Any} otherProps Other properties
 * @returns {JSX}
 */
const AppButton = ({ title, onPress, color = "primary", ...otherProps }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
      {...otherProps}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
