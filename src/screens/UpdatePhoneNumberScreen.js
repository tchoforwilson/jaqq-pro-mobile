import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../components/common";

function UpdatePhoneNumberScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>Change your phone number</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default UpdatePhoneNumberScreen;
