import React from "react";
import { useFormikContext } from "formik";
import colors from "../../configurations/colors";
import AppButton from "./AppButton";
import { StyleSheet } from "react-native";
/**
 * @breif Render a form submit button
 * @param {String} title Submit button title
 * @returns {JSX}
 */
const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton title={title} color={colors.primary} onPress={handleSubmit} />
  );
};

export default SubmitButton;
