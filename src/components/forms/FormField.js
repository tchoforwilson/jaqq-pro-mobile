import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import { AppText } from "../common";
import { AppTextInput } from "../inputs";
import FormErrorMessage from "./FormErrorMessage";
import colors from "../../configurations/colors";

const FormField = ({
  label,
  name,
  placeholder,
  isMessage = false,
  ...otherProps
}) => {
  const { touched, errors, setFieldValue, values } = useFormikContext();
  return (
    <View style={styles.field}>
      <AppTextInput
        placeholder={placeholder}
        value={values[name]}
        onChangeText={(text) => setFieldValue(name, text)}
        style={styles.input}
        {...otherProps}
      />
      {!isMessage && (
        <FormErrorMessage error={errors[name]} visible={touched[name]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontWeight: 600,
    fontSize: 20,
    textAlign: "left",
    marginBottom: 5,
  },
  input: {
    borderColor: colors.grey_light_3,
    backgroundColor: colors.grey_light_3,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
});

export default FormField;
