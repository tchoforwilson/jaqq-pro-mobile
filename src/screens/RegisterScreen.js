import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { AppScreen, AppText } from "../components/common";
import {
  FormContainer,
  FormField,
  FormPasswordField,
} from "../components/forms";
import { SubmitButton } from "../components/buttons";
import defaultStyles from "../configurations/styles";
import authServices from "../services/auth.services";
import { useApi, useAuth } from "../hooks";
import { AppActivityIndicator } from "../components/indicators";

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .required("First name is required!")
    .label("First name"),
  lastname: Yup.string().required("Last name is required!").label("Last name"),
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

const RegisterScreen = ({ navigation }) => {
  const registerApi = useApi(authServices.register);
  const auth = useAuth();

  const handleSubmit = async (values) => {
    const result = await registerApi.request(values);

    if (result.ok) {
      auth.logIn(result.data.token);
      auth.storeNewUser(registerApi.data);
    }
  };
  return (
    <AppScreen style={styles.screen}>
      <AppActivityIndicator visible={registerApi.loading} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <AppText style={styles.logo}>Jaqq Pro</AppText>
        <View style={defaultStyles.heading}>
          <Text style={defaultStyles.heading.primary}>Sign up</Text>
          <AppText style={defaultStyles.heading.secondary}>
            Enter your credentials to continue
          </AppText>
        </View>
        <View style={defaultStyles.form}>
          <FormContainer
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              passwordConfirm: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <FormField
              label="First name"
              name="firstname"
              iconType="account"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              keyboardType="default"
              textContentType="name"
            />
            <FormField
              label="Last name"
              name="lastname"
              iconType="account"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              keyboardType="default"
              textContentType="name"
            />
            <FormField
              label="Email"
              name="email"
              iconType="email"
              autoCorrect={false}
              clearButtonMode="always"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <FormPasswordField label="Password" name="password" />
            <FormPasswordField
              label="Confirm Password"
              name="passwordConfirm"
            />
            <SubmitButton title="sign up" />
          </FormContainer>
        </View>
        <View style={styles.login}>
          <AppText>Already have an account?</AppText>
          <AppText
            style={styles.login.link}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AppText>
        </View>
      </KeyboardAvoidingView>
    </AppScreen>
  );
};

RegisterScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
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
  login: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    link: {
      color: defaultStyles.colors.primary,
      textTransform: "capitalize",
      marginLeft: 5,
    },
  },
  keyboardView: {
    flex: 1,
    width: "100%",
  },
});

export default RegisterScreen;
