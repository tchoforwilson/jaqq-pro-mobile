import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../components/common";

function UpdatePasswordScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>Update your password</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default UpdatePasswordScreen;
