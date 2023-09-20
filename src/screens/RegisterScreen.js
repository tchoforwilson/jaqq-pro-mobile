import React from "react";
import { ScrollView, View } from "react-native";
import * as Yup from "yup";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import { FormContainer, FormField } from "../components/forms";
import { SubmitButton } from "../components/buttons";
import colors from "../configurations/colors";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("User name required!").label("First name"),
  lastName: Yup.string().required("User name required!").label("Last name"),
  email: Yup.string()
    .email("Email invalid!")
    .required("Email required!")
    .label("Email"),
  phone: Yup.number().required("Phone required!").label("Phone number"),
  password: Yup.string()
    .required("Password required!")
    .min(8, "Atleast 8 characters")
    .label("Password"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), "null"], "Passwords dont't match")
    .required()
    .label("Confirm password"),
});

const RegisterScreen = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <ScrollView
      showsVerticalScrollIndictor={false}
      style={{ flex: 1, backgroundColor: colors.light }}
    >
      <AppScreen>
        <AppText>Jaqq Pro</AppText>
        <FormContainer
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={validationSchema}
          obSubmit={handleSubmit}
        >
          <>
            <View>
              <FormField
                name="firstName"
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                iconType="account"
                keyboardType="default"
                placeholder="First name"
                textContentType="name"
              />
              <FormField
                name="lastName"
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                iconType="account"
                keyboardType="default"
                placeholder="Last name"
                textContentType="name"
              />
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
              <FormField
                name="phone"
                clearButtonMode="always"
                iconType="phone"
                keyboardType="phone-pad"
                placeholder="Phone number"
                textContentType="telephoneNumber"
              />
              <FormField
                name="password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                iconType="lock"
                placeholder="Password"
                textContentType="password"
              />
              <FormField
                name="passwordConfirm"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                iconType="lock"
                placeholder="Confirm password"
                textContentType="password"
              />
            </View>
            <SubmitButton title="Create an account" color={colors.primary} />
          </>
        </FormContainer>
      </AppScreen>
    </ScrollView>
  );
};

export default RegisterScreen;
