import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import { AppText } from "../components/common";
import colors from "../configurations/colors";
import { AppButton } from "../components/buttons";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Japp Pro</Text>
        <AppText style={styles.tagline}>
          Find the perfect place for work
        </AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    objectFit: "cover",
    resizeMode: "both",
    objectPosition: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    fontSize: 25,
    fontWeight: "700",
    color: colors.secondary,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
