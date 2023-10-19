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
const AppButton = ({ title, color, onPress, ...otherProps }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
      {...otherProps}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "600",
  },
});

export default AppButton;
