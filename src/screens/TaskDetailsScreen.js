import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppScreen, AppText } from "../components/common";
import colors from "../configurations/colors";
import { ListItem } from "../components/lists";

const TaskDetailsScreen = ({ route }) => {
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
            color={colors.white}
            style={styles.icon}
          />
          <AppText style={styles.location}>{task.location}</AppText>
        </View>
        <View style={styles.userContainer}>
          <ListItem
            title="Neba Jones Freeman"
            image={require("../assets/profile.jpg")}
          />
        </View>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: 20,
  },
  icon: {
    color: colors.white,
  },
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
    marginVertical: 40,
  },
  subtitle: {
    color: colors.white,
    fontWeight: "bold",
  },
  title: {
    color: colors.white,
    marginBottom: 7,
  },
});

export default TaskDetailsScreen;
