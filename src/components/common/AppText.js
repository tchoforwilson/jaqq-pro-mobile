import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

/**
 * @breif Application text
 * @param {String} children Children of text components
 * @param {String} style New text styles property
 * @param {String} otherProps Other Text properties
 * @returns
 */
const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
