import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppText } from "../common";
import colors from "../../configurations/colors";

const Card = ({ title, subTitle, location, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
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
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 15,
    padding: 20,
  },
  location: {
    color: colors.grey_dark_1,
  },
  icon: {
    color: colors.secondary,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    color: colors.primary,
    textTransform: "capitalize",
    marginBottom: 7,
  },
});

export default Card;
