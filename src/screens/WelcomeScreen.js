import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "../components/buttons";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Jaqq Pro</Text>
      <AppButton title="Start" color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeScreen;
