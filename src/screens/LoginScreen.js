import React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Yup from "yup";
import { AppScreen, AppText } from "../components/common";
import {
  FormContainer,
  FormField,
  FormPasswordField,
} from "../components/forms";
import { SubmitButton } from "../components/buttons";
import defaultStyles from "../configurations/styles";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter valid email")
    .required("Email is required")
    .label("Email"),
  password: Yup.string()
    .required("Password is required!")
    .min(8)
    .label("Password"),
});

const LoginScreeen = ({ navigation }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <AppScreen style={styles.screen}>
      <AppText style={styles.logo}>Jaqq Pro</AppText>
      <View style={defaultStyles.heading}>
        <Text style={defaultStyles.heading.primary}>Login</Text>
        <AppText style={defaultStyles.heading.secondary}>
          Enter your email and password
        </AppText>
      </View>
      <View style={defaultStyles.form}>
        <FormContainer
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormField
            label="Email"
            name="email"
            iconType="email"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <FormPasswordField label="Password" name="password" />
          <SubmitButton title="Login" />
        </FormContainer>
      </View>
      <View style={styles.signup}>
        <AppText>Don't have an account?</AppText>
        <AppText
          style={styles.signup.link}
          onPress={() => navigation.navigate("Register")}
        >
          sign up
        </AppText>
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
  signup: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    link: {
      color: defaultStyles.colors.primary,
      textTransform: "capitalize",
      marginLeft: 5,
    },
  },
});

export default LoginScreeen;
