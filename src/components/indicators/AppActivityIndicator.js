import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../../configurations/colors";

const AppActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      {/*<LottieView
        autoPlay
        loop
        source={require("../../assets/animations/loader.json")}
  /> */}
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: colors.white,
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});

export default AppActivityIndicator;
