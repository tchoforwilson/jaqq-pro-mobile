import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useFormikContext } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import colors from "../../configurations/colors";

/**
 * @breif Render a form field component
 * @param {String} label Form field label
 * @param {String} name Form field name
 * @param {String} iconType Form field icon type
 * @param {Any} otherProps Form field other properties
 */
const FormField = ({ label, name, iconType, ...otherProps }) => {
  const { touched, errors, setFieldValue, values } = useFormikContext();
  return (
    <View style={styles.field}>
      <FloatingLabelInput
        label={label}
        value={values[name]}
        onChangeText={(text) => setFieldValue(name, text)}
        leftComponent={
          <TextInput.Icon
            icon={iconType}
            style={styles.icon}
            color={colors.grey_dark_1}
          />
        }
        containerStyles={styles.container}
        labelStyles={styles.label}
        inputStyles={styles.input}
        {...otherProps}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    width: "100%",
    marginBottom: 15,
  },
  container: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderColor: colors.grey_dark_3,
    borderRadius: 8,
  },
  label: {
    marginLeft: 40,
    color: colors.grey_dark_3,
  },
  input: {
    color: colors.black,
    marginLeft: 40,
    paddingVertical: 15,
    fontSize: 20,
  },
  icon: {
    marginLeft: 30,
  },
});

export default FormField;
