import React, { useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };

  return (
    <FormField
      label={label}
      name={name}
      iconType="lock"
      isPassword
      togglePassword={togglePassword} // Pass the togglePassword function
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
      secureTextEntry={!showPassword} // Invert the showPassword state
      showPasswordContainerStyles={styles.password}
    />
  );
};

const styles = StyleSheet.create({
  password: {
    position: "absolute",
    right: 30,
    top: 18,
  },
});

export default FormPasswordField;
