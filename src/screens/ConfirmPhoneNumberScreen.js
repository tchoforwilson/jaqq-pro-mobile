import React from "react";
import { View, StyleSheet } from "react-native";
import { AppScreen, AppText } from "../components/common";
import AuthHeading from "../components/header/AuthHeading";
import { AppTextInput } from "../components/inputs";
import colors from "../configurations/colors";
import { AppButton } from "../components/buttons";

const ConfirmPhoneNumberScreen = () => {
  const handlePress = () => {
    console.log("pressed");
  };
  return (
    <AppScreen>
      <AuthHeading
        title="confirm your number"
        subtitle="Enter the code we sent to the number ending"
      />
      <AppText style={styles.number}>0931</AppText>
      <View style={styles.inputsContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <AppTextInput
            key={index}
            style={styles.input}
            secureTextEntry
            textContentType="password"
            keyboardType="number-pad"
          />
        ))}
      </View>
      <AppText style={styles.codeLink}>Send code again</AppText>
      <AppButton title="continue" onPress={handlePress} color="primary" />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  number: {
    fontWeight: "700",
  },
  inputsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  input: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.grey_dark_3,
    width: "20%",
    color: colors.black,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  codeLink: {
    textAlign: "center",
    color: colors.primary,
    marginTop: 20,
    marginBottom: 60,
  },
});

export default ConfirmPhoneNumberScreen;
