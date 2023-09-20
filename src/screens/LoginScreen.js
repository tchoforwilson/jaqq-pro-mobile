import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import * as Yup from "yup";
import AppScreen from "../components/AppScreen";
import { FormContainer, FormField } from "../components/forms";
import { SubmitButton } from "../components/buttons";
import colors from "../configurations/colors";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email!")
    .required("Email is required!")
    .label("Email"),
  password: Yup.string()
    .required("Password is required!")
    .min(3)
    .label("Password"),
});

const LoginScreen = () => {
  return (
    <AppScreen>
      <FormContainer
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
      >
        <Text style={styles.header}>Login</Text>
        <Text style={styles.text}>Enter your email and password</Text>
        <View>
          <FormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            iconType="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />
        </View>
      </FormContainer>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "700",
  },
  text: {
    color: colors.light,
    fontSize: 18,
    fontWeight: "400",
    marginTop: 10,
  },
});

export default LoginScreen;
