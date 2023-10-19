import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import colors from "../../configurations/colors";

const AppScreen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
  },
});

export default AppScreen;
