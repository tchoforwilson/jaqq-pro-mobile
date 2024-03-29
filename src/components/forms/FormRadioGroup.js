import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import { RadioButton } from "react-native-paper";
import FormRadioButton from "./FormRadioButton";

const FormRadioGroup = ({ name, items = [] }) => {
  const { setFieldValue, values } = useFormikContext();
  return (
    <View style={styles.container}>
      <RadioButton.Group
        value={values[name]}
        onValueChange={(value) => setFieldValue(name, value)}
      >
        {items.map((item) => (
          <FormRadioButton
            key={item.label}
            label={item.label}
            value={item.value}
          />
        ))}
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

export default FormRadioGroup;
