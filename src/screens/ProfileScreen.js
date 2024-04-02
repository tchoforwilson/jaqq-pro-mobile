import React, { Fragment } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppScreen, KeyBoardAvoidingViewContainer } from "../components/common";
import {
  FormContainer,
  FormDateTimePicker,
  FormField,
  FormPicker,
} from "../components/forms";
import { SubmitButton } from "../components/buttons";
import colors from "../configurations/colors";
import routes from "../routes";
import { AppActivityIndicator } from "../components/indicators";
import { useApi, useAuth } from "../hooks";
import userServices from "../services/user.services";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name required!").label("First name"),
  lastname: Yup.string().required("Last name required!").label("Last Name"),
  email: Yup.string()
    .email("Email invalid!")
    .required("Email required!")
    .label("Email"),
  gender: Yup.string().notOneOf(["-1"], "Invalid gender").label("Gender"),
  birthday: Yup.date().nullable().label("Birthday"),
});

const ProfileScreen = ({ navigation }) => {
  const { user, storeNewUser } = useAuth();
  const { loading, request: profileApi } = useApi(userServices.updateMe);

  const handleSubmit = async (values) => {
    const result = await profileApi(values);

    if (result.ok) {
      storeNewUser(result.data.data);
      return;
    }
  };

  return (
    <Fragment>
      <AppActivityIndicator visible={loading} />
      <AppScreen style={styles.screen}>
        <KeyBoardAvoidingViewContainer style={styles.scrollView}>
          <View style={[styles.container, styles.imageContainer]}>
            <Image style={styles.image} source={{ uri: user.photo }} />
            <MaterialCommunityIcons
              name="camera-plus"
              size={35}
              color={colors.primary}
              style={styles.imageIcon}
              onPress={() => navigation.navigate(routes.UPDATE_PROFILE_IMAGE)}
            />
          </View>
          <View style={styles.container}>
            <FormContainer
              initialValues={{
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                gender: user.gender,
                birthday: user.birthday,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <FormField
                label="First name"
                name="firstname"
                iconType="account"
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                keyboardType="default"
                textContentType="name"
              />
              <FormField
                label="Last name"
                name="lastname"
                iconType="account"
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                keyboardType="default"
                textContentType="name"
              />
              <FormField
                label="Email"
                name="email"
                iconType="email"
                autoCorrect={false}
                clearButtonMode="always"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <FormPicker
                name="gender"
                items={[
                  { label: "Gender", value: "-1" },
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                iconType="gender-male-female"
              />
              <FormDateTimePicker
                label="Birthday"
                name="birthday"
                iconType="calendar"
              />
              <SubmitButton title="Update Account" />
            </FormContainer>
          </View>
        </KeyBoardAvoidingViewContainer>
      </AppScreen>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderColor: colors.primary,
    borderWidth: 2,
    marginBottom: 40,
  },
  imageContainer: {
    position: "relative",
  },
  imageIcon: {
    position: "absolute",
    top: "65%",
    right: "32%",
  },
  screen: {
    backgroundColor: colors.light,
  },
  scrollView: {
    flex: 1,
  },
});

export default ProfileScreen;
