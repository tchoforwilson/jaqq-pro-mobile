import React from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

import { AppText } from "../common";

const RadioButtonField = ({ name, value }) => {
  return (
    <View style={styles.radioButton}>
      <AppText>{name}</AppText>
      <RadioButton value={value} />
    </View>
  );
};

RadioButtonField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const FormGenderField = ({ name }) => {
  const { setFieldValue, values } = useFormikContext();

  return (
    <View style={styles.container}>
      <AppText style={styles.label}>Gender:</AppText>
      <View style={styles.radioGroup}>
        <RadioButton.Group
          onValueChange={(value) => setFieldValue(name, value)}
          value={values[name]}
        >
          <RadioButtonField name="Male" value="male" />
          <RadioButtonField name="Female" value="female" />
        </RadioButton.Group>
      </View>
    </View>
  );
};

FormGenderField.propTypes = {
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  radioGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default FormGenderField;
