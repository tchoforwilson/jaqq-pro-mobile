import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../configurations/colors";
import { StyleSheet } from "react-native";

const AppIcon = ({
  name,
  size = 30,
  color = colors.black,
  backgroundColor = colors.white,
  onPress,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor, width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <MaterialCommunityIcons
        name={name}
        color={color}
        size={size / 2}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppIcon;
