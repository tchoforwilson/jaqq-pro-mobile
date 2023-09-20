import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import AppTextInput from "./AppTextInput";

const FloatingLabelInput = ({ label, ...otherProps }) => {
  const [isFocused, setIsFocus] = useState(false);
  const labelStyle = {
    position: "absolute",
    left: 0,
    top: !isFocused ? 18 : 0,
    fontSize: !isFocused ? 18 : 14,
    color: !isFocused ? "#aaa" : "#000",
  };
  return (
    <>
      <Text style={labelStyle}>{label}</Text>
      <AppTextInput
        {...otherProps}
        style={styles.input}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 26,
    fontSize: 18,
    color: "#000",
  },
});

export default FloatingLabelInput;
