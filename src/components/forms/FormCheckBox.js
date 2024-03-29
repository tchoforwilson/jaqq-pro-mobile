import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";

import { AppText } from "../common";
import colors from "../../configurations/colors";

const FormCheckBox = ({ label, name, value }) => {
  const { setFieldValue, values } = useFormikContext();
  const data = values[name].slice(); // Create a copy of the array to avoid mutating state directly

  const handleChange = () => {
    let updatedData;
    if (data.includes(value)) {
      updatedData = data.filter((item) => item !== value); // Remove the value if it exists
    } else {
      updatedData = [...data, value]; // Add the value if it doesn't exist
    }
    setFieldValue(name, updatedData);
  };

  return (
    <View style={styles.section}>
      <Checkbox
        style={styles.checkbox}
        value={data.includes(value)}
        onValueChange={() => handleChange()}
        color={data.includes(value) ? colors.primary : undefined}
      />
      <AppText style={styles.label}>{label}</AppText>
    </View>
  );
};

FormCheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FormCheckBox;
