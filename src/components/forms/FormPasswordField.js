import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import FormField from "./FormField";

/**
 * @breif Render a form password field
 * @param {String} Label Form password field label
 * @param {String} name Form password field name
 * @returns
 */
const FormPasswordField = ({ label, name }) => {
  const [show, setShow] = useState(false);

  const togglePassword = () => setShow(!show);

  return (
    <FormField
      label={label}
      name={name}
      iconType="lock"
      isPassword={true}
      togglePassword={show}
      customShowPasswordComponent={
        <TextInput.Icon onPress={togglePassword} icon="eye-off" />
      }
      customHidePasswordComponent={
        <TextInput.Icon onPress={togglePassword} icon="eye" />
      }
      autoCapitalize="none"
      autoCorrect={false}
      clearButtonMode="always"
      textContentType="password"
      showPasswordContainerStyles={styles.password}
    />
  );
};

const styles = StyleSheet.create({
  password: {
    position: "absolute",
    right: 30,
    top: 12,
  },
});

export default FormPasswordField;
