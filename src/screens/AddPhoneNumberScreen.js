import React from "react";
import * as Yup from "yup";
import { View } from "react-native";
import { AppScreen } from "../components/common";
import AuthHeading from "../components/header/AuthHeading";
import { FormContainer, FormField } from "../components/forms";
import { SubmitButton } from "../components/buttons";
import defaultsStyles from "../configurations/styles";

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().required("Phone number required!"),
});

const AddPhoneNunberScreen = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <AppScreen>
      <AuthHeading
        title="Add Phone Number"
        subtitle="We will send an OTP Verification to you."
      />
      <View style={defaultsStyles.form}>
        <FormContainer
          initialValues={{ phoneNumber: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormField
            label="Phone number"
            name="phoneNumber"
            iconType="phone"
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
          />
          <SubmitButton title="Send code" />
        </FormContainer>
      </View>
    </AppScreen>
  );
};

export default AddPhoneNunberScreen;
