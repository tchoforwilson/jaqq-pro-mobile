import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppScreen } from "../components/common";
import {
  FormContainer,
  FormErrorMessage,
  FormField,
} from "../components/forms";
import { SubmitButton } from "../components/buttons";
import colors from "../configurations/colors";
import authServices from "../services/auth.services";
import routes from "../routes";

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
  phone: Yup.number()
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
const UpdatePhoneNumberScreen = ({ navigation }) => {
  const [updatePhoneFailed, setUpdatePhoneFailed] = useState(false);
  const handleSubmit = async (values) => {
    const result = await authServices.updatePhoneNumber(values);

    if (!result.ok) return setUpdatePhoneFailed(true);

    setUpdatePhoneFailed(false);
    return navigation.navigate(routes.CONFIRM_PHONENUMBER);
  };
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <FormContainer
          initialValues={{ phoneCurrent: "", phone: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormErrorMessage
            error="Invalid phone number"
            visible={updatePhoneFailed}
          />
          <FormField
            label="Old Phone Number"
            name="phoneCurrent"
            iconType="phone"
            keyboardType="numeric"
          />
          <FormField
            label="New Phone Number"
            name="phone"
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
