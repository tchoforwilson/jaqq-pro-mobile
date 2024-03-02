import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppText } from "../common";

import colors from "../../configurations/colors";

function Card({ title, subTitle, location }) {
  return (
    <View styles={styles.card}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subtitle}>{subTitle}</AppText>
      <View style={styles.locationContainer}>
        <MaterialCommunityIcons
          name="map-marker"
          size={25}
          color={colors.secondary}
          style={styles.icon}
        />
        <AppText style={styles.location}>{location}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 20,
  },
  location: {
    color: colors.grey_dark_1,
  },
  icon: {
    color: colors.secondary,
  },
  title: {
    color: colors.primary,
    textTransform: "capitalize",
  },
  subtitle: {
    color: colors.secondary,
  },
});

export default Card;
