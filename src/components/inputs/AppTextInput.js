import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";

const AppTextInput = ({ placeholder, width = "100%", ...otherProps }) => {
  return (
    <TextInput placeholder={placeholder} style={styles.text} {...otherProps} />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    flex: 1,
  },
});

export default AppTextInput;
