import React from "react";
import { Text } from "react-native";
import defaultStyles from "../../configurations/styles";

/**
 * @breif Application text
 * @param {String} children Children of text components
 * @param {String} style New text styles property
 * @param {String} otherProps Other Text properties
 * @returns
 */
const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
