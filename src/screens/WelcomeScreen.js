import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { AppText } from "../components/common";
import routes from "../navigations/routes";
import colors from "../configurations/colors";
import { AppButton } from "../components/buttons";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Japp Pro</Text>
        <AppText style={styles.tagLine}>
          Find the perfect place for work
        </AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER)}
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
    resize: "both",
    objectPosition: "center",
  },
  logo: {
    fontSize: 25,
    fontWeight: "700",
    color: colors.green,
  },
  tagLine: {
    color: colors.grey_dark_1,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 10,
    width: "100%",
  },
});

export default WelcomeScreen;
