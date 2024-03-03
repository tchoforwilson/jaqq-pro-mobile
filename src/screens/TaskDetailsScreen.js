import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppScreen, AppText } from "../components/common";
import colors from "../configurations/colors";

const ServiceDetailsScreen = ({ route }) => {
  const task = route.params;
  return (
    <AppScreen>
      <View style={styles.container}>
        <AppText style={styles.title}>{task.name}</AppText>
        <AppText style={styles.subtitle}>{task.price + " XAF"}</AppText>
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons
            name="map-marker"
            size={25}
            color={colors.secondary}
            style={styles.icon}
          />
          <AppText style={styles.location}>{task.location}</AppText>
        </View>
        <View style={styles.userContainer}></View>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {},
  icon: {},
  locationContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-start",
    marginTop: 15,
  },
  location: {
    color: colors.grey_dark_1,
  },
  userContainer: {
    backgroundColor: colors.secondary,
    padding: 20,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    color: colors.primary,
    marginBottom: 7,
  },
});

export default ServiceDetailsScreen;
