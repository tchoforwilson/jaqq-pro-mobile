import React from "react";
import { View, Text } from "react-native";
import { AppText } from "../common";
import defaultStyles from "../../configurations/styles";

/**
 * @breif Authentication headings for all authentication
 * @param {String} title Heading title
 * @param {String} subtitle Heading subtitle
 * @returns
 */
const AuthHeading = ({ title, subtitle }) => {
  return (
    <View style={defaultStyles.heading}>
      <Text style={defaultStyles.heading.primary}>{title}</Text>
      <AppText style={defaultStyles.heading.secondary}>{subtitle}</AppText>
    </View>
  );
};

export default AuthHeading;
