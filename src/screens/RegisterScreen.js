import React from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppScreen, AppText } from "../components/common";
import { FormContainer, FormField } from "../components/forms";
import { SubmitButton } from "../components/buttons";
import colors from "../configurations/colors";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required!")
    .label("First name"),
  lastName: Yup.string().required("Last name is required!").label("Last name"),
  email: Yup.string()
    .email("Email invalid!")
    .required("Email required!")
    .label("Email"),
  password: Yup.string()
    .required("Password required!")
    .min(8, "Atleast 8 characters")
    .label("Password"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), "null"], "Passwords dont't match")
    .required("Confirm password")
    .label("Confirm password"),
});

const RegisterScreen = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <AppScreen style={styles.screen}>
      <AppText style={styles.logo}>Jaqq Pro</AppText>
      <View style={styles.heading}>
        <Text style={styles.heading.primary}>Sign up</Text>
        <AppText style={styles.heading.secondary}>
          Enter your information
        </AppText>
      </View>
      <FormContainer
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField
          name="firstName"
          placeholder="First name"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          keyboardType="default"
          textContentType="name"
        />
        <FormField
          name="lastName"
          placeholder="Last name"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          keyboardType="default"
          textContentType="name"
        />
        <FormField
          name="email"
          placeholder="Email address"
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <FormField
          name="password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          placeholder="Password"
          textContentType="password"
        />
        <FormField
          name="passwordConfirm"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          placeholder="Confirm password"
          textContentType="password"
        />
        <SubmitButton title="sign up" color={colors.primary} />
      </FormContainer>
      <View style={styles.login}>
        <AppText>Already have an account?</AppText>
        <AppText style={styles.login.link}>Login</AppText>
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
  login: {
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

export default RegisterScreen;
