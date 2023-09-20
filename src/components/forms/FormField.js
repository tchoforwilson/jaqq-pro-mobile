import React from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";
import { FloatingLabelInput } from "../inputs";
import FormErrorMessage from "./FormErrorMessage";
import AppIcon from "../AppIcon";

const FormField = ({ name, isMessage = false, ...otherProps }) => {
  const { touched, errors, setFieldValue, values } = useFormikContext();
  return (
    <View>
      <AppIcon />
      <FloatingLabelInput
        {...otherProps}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
      />
      {!isMessage && (
        <FormErrorMessage error={errors[name]} visible={touched[name]} />
      )}
    </View>
  );
};

export default FormField;
