import React from "react";

import { View, Text, StyleSheet } from "react-native";
import colors from "../configurations/colors";
import { AppButton } from "../components/buttons";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Jaqq pro</Text>
      <AppButton title="get started" color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
});

export default WelcomeScreen;
