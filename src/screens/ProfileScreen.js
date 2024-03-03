import React from "react";
import { View, StyleSheet } from "react-native";
import { AppScreen, AppText } from "../components/common";

const ProfileScreen = (props) => {
  return (
    <AppScreen>
      <View style={styles.container}>
        <AppText>Profile</AppText>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ProfileScreen;
