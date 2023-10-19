import React from "react";
import { StyleSheet, Text } from "react-native";
import * as Yup from "yup";
import { AppScreen, AppText } from "../components/common";
import colors from "../configurations/colors";
import { FormContainer, FormField } from "../components/forms";
import { SubmitButton } from "../components/buttons";
import { View } from "react-native";

const validationSchema = Yup.object().shape({
  telephone: Yup.string("Enter a valid phone number!")
    .required("Phone number is required!")
    .label("Phone number"),
  password: Yup.string()
    .required("Password is required!")
    .min(3)
    .label("Password"),
});

const LoginScreeen = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <AppScreen style={styles.screen}>
      <AppText style={styles.logo}>Jaqq Pro</AppText>
      <View style={styles.heading}>
        <Text style={styles.heading.primary}>Login</Text>
        <AppText style={styles.heading.secondary}>
          Enter your phone number and password
        </AppText>
      </View>
      <FormContainer
        initialValues={{ telephone: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField
          label="Phone number"
          name="telephone"
          placeholder="Enter your phone number"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          keyboardType="phone-pad"
          textContentType="phone-pad"
        />
        <FormField
          label="Password"
          name="password"
          placeholder="Enter password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </FormContainer>
      <View style={styles.signup}>
        <AppText>Don't have an account?</AppText>
        <AppText style={styles.signup.link}>sign up</AppText>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    width: "100%",
  },
  logo: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 20,
    textTransform: "uppercase",
  },
  heading: {
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
    primary: {
      fontSize: 25,
      fontWeight: "700",
    },
    secondary: {
      color: colors.grey_dark_3,
      fontSize: 18,
      fontWeight: "400",
      marginTop: 10,
    },
  },
  signup: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    link: {
      color: colors.primary,
      textTransform: "capitalize",
      marginLeft: 5,
    },
  },
});

export default LoginScreeen;
