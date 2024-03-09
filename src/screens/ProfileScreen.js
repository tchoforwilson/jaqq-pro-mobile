import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppScreen } from "../components/common";
import { FormContainer, FormField, FormGenderField } from "../components/forms";
import { SubmitButton } from "../components/buttons";
import colors from "../configurations/colors";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name required!").label("First name"),
  lastName: Yup.string().required("Last name required!").label("Last Name"),
  email: Yup.string()
    .email("Email invalid!")
    .required("Email required!")
    .label("Email"),
  gender: Yup.string().label("Gender"),
});

const ProfileScreen = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <AppScreen>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.container, styles.imageContainer]}>
          <Image
            style={styles.image}
            source={require("../assets/profile.jpg")}
          />
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.primary}
            style={styles.imageIcon}
          />
        </View>
        <View style={styles.container}>
          <FormContainer
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              gender: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <FormField
              label="First name"
              name="firstName"
              iconType="account"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              keyboardType="default"
              textContentType="name"
            />
            <FormField
              label="Last name"
              name="lastName"
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
            <FormGenderField name="gender" />
            <SubmitButton title="Update Account" />
          </FormContainer>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 40,
  },
  imageContainer: {
    position: "relative",
  },
  imageIcon: {
    position: "absolute",
    top: "70%",
    right: "30%",
  },
  scrollView: {
    flex: 1,
  },
});

export default ProfileScreen;
