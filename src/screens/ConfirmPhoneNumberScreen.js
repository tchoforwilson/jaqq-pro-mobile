import React, { Fragment } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import * as Yup from "yup";

import { AppScreen, AppText } from "../components/common";
import AuthHeading from "../components/header/AuthHeading";
import colors from "../configurations/colors";
import defaultsStyles from "../configurations/styles";
import { SubmitButton } from "../components/buttons";
import authServices from "../services/auth.services";
import { useApi, useAuth } from "../hooks";
import { AppActivityIndicator } from "../components/indicators";
import { FormContainer, FormField } from "../components/forms";

const validationSchema = Yup.object().shape({
  code: Yup.number().required("Code required!").label("Code"),
});

const ConfirmPhoneNumberScreen = ({ route }) => {
  const { phone } = route.params;

  const auth = useAuth();
  const resendApi = useApi(authServices.resendSMSCode);
  const verifyApi = useApi(authServices.verifySMSCode);

  const handleResend = async () => {
    await resendApi.request({ phone });
  };

  const handleSubmit = async (values) => {
    const result = await verifyApi.request(values);
    if (result.ok) {
      return auth.storeNewUser(result.data.data);
    }
  };

  return (
    <Fragment>
      <AppActivityIndicator visible={verifyApi.loading} />
      <AppScreen style={styles.screen}>
        <AuthHeading
          title="phone verification"
          subtitle={`Enter the code sent to ${phone}`}
        />
        <View style={defaultsStyles.form}>
          <FormContainer
            initialValues={{ code: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <FormField
              label="Code"
              name="code"
              iconType="lock-question"
              maxLength={4}
              keyboardType="numeric"
              textContentType="oneTimeCode"
              clearButtonMode="always"
            />
            <SubmitButton title="Continue" />
          </FormContainer>
        </View>
        <View style={styles.codeLink}>
          <AppText>if you didn't receive a code!</AppText>
          <TouchableHighlight onPress={handleResend}>
            <AppText style={styles.resend}>Resend</AppText>
          </TouchableHighlight>
        </View>
      </AppScreen>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  codeLink: {
    display: "flex",
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  resend: {
    color: colors.primary,
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: 18,
  },
});

export default ConfirmPhoneNumberScreen;
