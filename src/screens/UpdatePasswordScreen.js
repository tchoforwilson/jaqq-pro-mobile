import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppScreen } from "../components/common";
import { FormContainer, FormPasswordField } from "../components/forms";
import { SubmitButton } from "../components/buttons";
import colors from "../configurations/colors";

const validationSchema = Yup.object().shape({
  passwordCurrent: Yup.string()
    .required("Current password is required!")
    .label("Current Password"),
  password: Yup.string()
    .required("New password is required!")
    .min(8, "Password must be at least 8 characters")
    .label("New Password"),
  passwordConfirm: Yup.string()
    .required("Confirm new password")
    .min(8)
    .label("Current Password"),
});

const UpdatePasswordScreen = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <FormContainer
          initialValues={{
            passwordCurrent: "",
            password: "",
            passwordConfirm: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormPasswordField label="Current Password" name="passwordCurrent" />
          <FormPasswordField label="New Password" name="password" />
          <FormPasswordField label="Confirm Password" name="passwordConfirm" />
          <SubmitButton title="change password" />
        </FormContainer>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {},
});

export default UpdatePasswordScreen;
