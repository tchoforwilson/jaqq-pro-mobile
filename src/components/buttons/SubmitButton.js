import React from "react";
import AppButton from "./AppButton";
import { useFormikContext } from "formik";

/**
 * @breif Render a form submit button
 * @param {String} title Submit button title
 * @param {String} color Submit button color
 * @returns {JSx}
 */
const SubmitButton = ({ title, color }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} color={color} />;
};

export default SubmitButton;
