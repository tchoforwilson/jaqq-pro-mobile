import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../components/common";

const ServicesScreen = (props) => {
  return (
    <View style={styles.container}>
      <AppText>My services</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ServicesScreen;
