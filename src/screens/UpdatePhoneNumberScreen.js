import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppScreen } from "../components/common";
import { FormContainer, FormField } from "../components/forms";
import { SubmitButton } from "../components/buttons";
import colors from "../configurations/colors";

const validationSchema = Yup.object().shape({
  phoneCurrent: Yup.number()
    .integer()
    .typeError("Number must be an integer")
    .test("is-nine-digits", "Number must be 9 digits", (value) => {
      if (value) {
        const stringValue = String(value);
        return stringValue.length === 9;
      }
      return false;
    })
    .label("current Phone Number"),
  phoneNew: Yup.number()
    .integer()
    .typeError("Number must be an integer")
    .test("is-nine-digits", "Number must be 9 digits", (value) => {
      if (value) {
        const stringValue = String(value);
        return stringValue.length === 9;
      }
      return false;
    })
    .label("New Phone Number"),
});
const UpdatePhoneNumberScreen = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <FormContainer
          initialValues={{ phoneCurrent: "", phoneNew: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormField
            label="Old Phone Number"
            name="phoneCurrent"
            iconType="phone"
            keyboardType="numeric"
          />
          <FormField
            label="New Phone Number"
            name="phoneNew"
            iconType="phone"
            keyboardType="numeric"
          />
          <SubmitButton title="Change number" />
        </FormContainer>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {},
  screen: {
    backgroundColor: colors.light,
  },
});

export default UpdatePhoneNumberScreen;
