import React, { Fragment } from "react";
import * as Yup from "yup";
import { View, StyleSheet } from "react-native";

import { AppScreen } from "../components/common";
import AuthHeading from "../components/header/AuthHeading";
import { FormContainer, FormField } from "../components/forms";
import { SubmitButton } from "../components/buttons";
import defaultsStyles from "../configurations/styles";
import { useApi, useAuth } from "../hooks";
import authServices from "../services/auth.services";
import { AppActivityIndicator } from "../components/indicators";
import routes from "../routes";
import colors from "../configurations/colors";

const validationSchema = Yup.object().shape({
  phone: Yup.string().required("Phone number required!").label("Phone Number"),
});

const AddPhoneNunberScreen = ({ navigation }) => {
  const { loading, request: registerPhone } = useApi(
    authServices.registerPhone
  );

  const auth = useAuth();

  const handleSubmit = async (values) => {
    const result = await registerPhone(values);
    if (result.ok) {
      auth.storeNewUser(result.data.data);
      return navigation.navigate(routes.CONFIRM_PHONENUMBER, values);
    }
  };

  return (
    <Fragment>
      <AppActivityIndicator visible={loading} />
      <AppScreen style={styles.screen}>
        <AuthHeading
          title="What's you phone number"
          subtitle="We'll send you a text verification code."
        />
        <View style={defaultsStyles.form}>
          <FormContainer
            initialValues={{ phone: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <FormField
              label="Phone Number"
              name="phone"
              iconType="phone"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              maxLength={9}
              minLength={9}
            />
            <SubmitButton title="Send code" />
          </FormContainer>
        </View>
      </AppScreen>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.li,
  },
});

export default AddPhoneNunberScreen;
