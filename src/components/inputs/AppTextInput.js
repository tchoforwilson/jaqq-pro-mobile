import React from "react";
import { TextInput, StyleSheet, Platform } from "react-native";

/**
 * @breif Render a text input
 * @param {String} placeholder Text input place holder
 * @param {String} width Text input width
 * @param {Any} otherProps Other properties
 */
const AppTextInput = ({ placehoder, width = "100%", ...otherProps }) => {
  return <TextInput placeholder={placehoder} {...otherProps} />;
};

const style = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppTextInput;
