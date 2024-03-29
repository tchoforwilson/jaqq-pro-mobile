import React from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import PropTypes from "prop-types";
import { AppText } from "../common";

const FormRadioButton = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <RadioButton value={value} />
      <AppText style={styles.label}>{label}</AppText>
    </View>
  );
};

FormRadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 15,
    gap: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 600,
  },
});

export default FormRadioButton;
